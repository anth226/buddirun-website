import React, {useCallback, useEffect, useState} from "react";
import ReactModal from 'react-modal';
import Footer from "../modules/layout/FooterLayout";
import Header from "../modules/layout/HeaderLayout";
import { Unity, useUnityContext } from "react-unity-webgl";
import BuddiList from "../assets/buddi-list.json";
import RaceList from "../assets/race-list.json";
import { formatNumber, formatPlayerPosition, formatPlural, randomIntFromInterval } from "../assets/utils";
import { DatastoreStatus, useDatastoreContext } from "../lib/contextLib";
import AppUser from "../appModels/AppUser";
import { Link } from "react-router-dom";
import { APP_ROUTES } from "../app/routes";
const WebGLUnityFileURL = process.env.REACT_APP_WEBGL_FILES_URL;

const statLabels = {
  speed: 'Speed',
  intel: 'Intell',
  fitness: 'Fitness',
  accel: 'Accel',
  jump: 'Jump',
};

export default function Demo() {
  const [buddiList, setBuddiList] = useState([[],[]]), // NOTE: For sake of speed, I'll keep the concept of rows enforced in the UI
        [raceList, setRaceList] = useState([]),
        [userStock, setUserStock] = useState({ // TODO: Find proper naming for userStock to represent the user stock in rewards
          energyCell: 0
        }),
        [isGameStarted, setIsGameStarted] = useState(false),
        [selectedBuddi, setSelectedBuddi] = useState(null),
        [selectedRace, setSelectedRace] = useState(null),
        [playerPositionText, setPlayerPositionText] = useState(''),
        [playerRewardText, setPlayerRewardText] = useState(''),
        [openEndGameWinModal, setOpenEndGameWinModal] = useState(false),
        [openEndGameLoseModal, setOpenEndGameLoseModal] = useState(false),
        [showSignupReminder, setShowSignupReminder] = useState(false);

  const updateUserStock = (userStock) => {
    const appUserModel = AppUser.getInstance();
    appUserModel.updateProfileData({
      rewards: {
        ...userStock
      }
    })
    .then((res) => {
      console.log('USER PROFILE IS UPDATED');
    })
    .catch((err) => {
      console.error('An error occurred while updating user profile\n', err);
    });
  }

  const fetchRandomBuddis = useCallback(() => {
    const topRowQty = 2,
          buddiListKeys = Object.keys(BuddiList);
    let availableBuddiList = [[],[]],
        rowIndex = 0;

    // Pick a random Buddi in each Buddi group
    // NOTE: For sake of speed, we're using a standard FOR_LOOP to support the concept of rows enforced in the UI
    for (let i = 0; i < buddiListKeys.length; i++) {
      if (i === topRowQty) {
        rowIndex++;
      }
      const buddiGroupKey = buddiListKeys[i];
      const buddiGroup = Object.values(BuddiList[buddiGroupKey]);
      const buddiIndex = randomIntFromInterval(0, buddiGroup.length - 1);
      availableBuddiList[rowIndex].push(buddiGroup[buddiIndex]);
    }
    // Fill state
    setBuddiList(availableBuddiList);
  }, []);

  const fetchRandomRaces = useCallback(() => {
  const maxRaceQty = 3,
        raceListKeys = Object.keys(RaceList);
    let availableRaces = [];

    // Pick 3 random races
    if (raceListKeys.length < maxRaceQty) {
      availableRaces = Object.values(RaceList);
    } else {
      while (availableRaces.length < maxRaceQty) {
        const raceKeyIndex = randomIntFromInterval(0, raceListKeys.length - 1);
        const raceKey = raceListKeys[raceKeyIndex];
        availableRaces.push(RaceList[raceKey]);
        raceListKeys.splice(raceKeyIndex, 1);
      }
    }

    // Fill state
    setRaceList(availableRaces);
  }, []);

  const datastoreStatus = useDatastoreContext();

  // NOTE: Blocking Unity loader until optimized
  const { unityProvider, isLoaded, loadingProgression, sendMessage, addEventListener, removeEventListener } = useUnityContext({
    // LATEST
    loaderUrl: `${WebGLUnityFileURL}Webgl.loader.js`,
    dataUrl: `${WebGLUnityFileURL}Webgl.data`,
    frameworkUrl: `${WebGLUnityFileURL}Webgl.framework.js`,
    codeUrl: `${WebGLUnityFileURL}Webgl.wasm`,
  });

  const resetGame = () => {
    setSelectedBuddi(null);
    setSelectedRace(null);
    fetchRandomBuddis();
    fetchRandomRaces();
    setIsGameStarted(false);
  }

  const closeModal = () => {
    resetGame();
    setOpenEndGameWinModal(false);
    setOpenEndGameLoseModal(false);
  }

  const hideSignupReminder = () => {
    setShowSignupReminder(false);
  }

  const handleBuddiSelection = (e) => {
    const selectedBuddiID = e.currentTarget.dataset.id;
    const prevSelectedBuddiID = selectedBuddi ? selectedBuddi.id : '';
    if (prevSelectedBuddiID === selectedBuddiID) {
      setSelectedBuddi(null);
      setSelectedRace(null);
    } else {
      const buddiData = Object.values(BuddiList).flatMap((groupObj) => {
        return Object.values(groupObj);
      }).find((buddi) => {
        return buddi.id === selectedBuddiID;
      });
      setSelectedBuddi(buddiData);
    }
  }

  const handleRaceSelection = (e) => {
    const selectedRaceID = e.currentTarget.dataset.id;
    const prevSelectedRaceID = selectedRace ? selectedRace.id : '';
    if (prevSelectedRaceID === selectedRaceID) {
      setSelectedRace(null);
    } else {
      const raceData = Object.values(RaceList).find((race) => {
        return race.id === selectedRaceID;
      });
      setSelectedRace(raceData);
    }
  }

  const handleStartGame = () => {
    console.log('START GAME', isLoaded);
    if (!isLoaded) {
      console.warn("Can't start game, Unity is not loaded");
      return false;
    }
    const gameParams = {
      playerID: selectedBuddi.id, // ID of the selected Buddi
      // race: selectedRace,
    };
    console.log('TEST GAME PARAMS', gameParams);
    sendMessage("JavaScriptInterface", "StartGame", JSON.stringify(gameParams));
    setIsGameStarted(true);
  }

  const handleEndGame = useCallback((data) => {
    console.log('TEST END GAME', data, selectedRace);
    let gameData = {};
    try {
      gameData = JSON.parse(data);
    } catch (jsonParseErr) {
      console.warn('Game data is invalid');
      gameData = null;
    }
    let reward = 0;
    const playerPosition = gameData ? gameData.playerPosition : '';
    if (playerPosition && selectedRace) {
      reward = selectedRace.payout[playerPosition] || 0;
    }

    setPlayerPositionText(formatPlayerPosition(playerPosition));

    console.log('REWARD ?', reward);
    if (!reward) {
      setOpenEndGameLoseModal(true);
    } else {
      setPlayerRewardText(`${reward} ${formatPlural('Energy Cell', reward)}`);
      setOpenEndGameWinModal(true);
      let stockData = {};
      console.log('TEST CURRENT STOCK DATA', userStock);
      stockData = {
        ...userStock,
        energyCell: userStock.energyCell + reward
      }

      setUserStock(stockData);

      if (datastoreStatus !== DatastoreStatus.LOGGED_IN) {
        setShowSignupReminder(true);
      } else {
        console.log('UPDATE USER DATA AFTER WIN', stockData);
        updateUserStock(stockData);
      }
    }
  }, [selectedRace]);

  useEffect(() => {
    if (datastoreStatus === DatastoreStatus.LOGGED_IN) {
      const appUserModel = AppUser.getInstance();
      appUserModel.getOrCreateUser()
          .then((appUser) => {
            console.log('LOAD USER STOCK DATA', appUser);
            setUserStock((currentStock) => {
              const newStock = appUser.data.rewards || {
                energyCell: 0
              };
              return {...currentStock, ...newStock};
            });
          })
          .catch((err) => {
            console.warn(err);
          });
    }
    ReactModal.setAppElement('#root');
    if (buddiList[0].length === 0) {
      fetchRandomBuddis();
    }
    if (raceList.length === 0) {
      fetchRandomRaces();
    }
    addEventListener("onEndGame", handleEndGame);
    return () => {
      removeEventListener("onEndGame", handleEndGame);
    };
  }, [
    fetchRandomBuddis,
    fetchRandomRaces,
    addEventListener,
    removeEventListener,
    handleEndGame,
    datastoreStatus,
  ]);

  return (
    <div>
      <ReactModal
        isOpen={openEndGameWinModal}
        overlayClassName={'br-modal-overlay'}
        className={'br-modal-content raceEnd-modal-content raceEnd-win text-center'}
      >
        <h2>Winner</h2>
        <div className={'center-box'}>
          <img src="img/energy-cell.svg" alt="Energy Cell image" className={'energy-cell'} />
          {selectedBuddi &&
            <img src={selectedBuddi.imgUrl} className={'buddi-img'}/>
          }
          <div className={'rewardQty'}>
            <span>{parseInt(playerRewardText)}</span>
          </div>
        </div>
        <p>Your Buddi placed {playerPositionText}<br/>and you win {playerRewardText}!</p>
        <button
          className={`primary-btn active`}
          onClick={closeModal}
        >
          Thanks
        </button>
      </ReactModal>
      <ReactModal
        isOpen={openEndGameLoseModal}
        overlayClassName={'br-modal-overlay'}
        className={'br-modal-content raceEnd-modal-content raceEnd-lose text-center'}
      >
        <h2>Better luck next time</h2>
        <div className={'center-box'}>
          {selectedBuddi &&
          <img src={selectedBuddi.imgUrl} className={'buddi-img'}/>
          }
          <div className={'playerPos'}>
            <span>{playerPositionText}<br/>Place</span>
          </div>
        </div>
        <p>Your Buddi did not place in a payout position</p>
        <button
          className={`primary-btn active`}
          onClick={closeModal}
        >
          Try again
        </button>
      </ReactModal>
      <section className="race-a-buddi">
        <div className="container-fluid">
          <Header />
          <div className="wrap">
            <h1>Race a Buddi</h1>
          </div>
        </div>
      </section>
      <section className="select-a-buddi ">
        <div className="wrap position-relative container-fluid">
          <div className="heading-wrap text-center">
            <hr />
            <h3>SELECT A BUDDI</h3>
            <hr />
          </div>
          <div className={'rewardCol'}>
            <div className="energy-cell d-flex">
              <h4>{ formatNumber(userStock.energyCell) }</h4>
              <img src="img/energy-cell.svg" alt="Energy Cell image"/>
            </div>
            <div className={'signupReminder' + (!showSignupReminder ? ' d-none' : '')}>
              <img src={'img/icon-info.svg'}/>
              <div>
                <h4>Connect your wallet</h4>
                <p>Complete your account and connect your wallet to keep the energy cells you win. </p>
                <Link to={APP_ROUTES.Profile.path} state={{from: APP_ROUTES.Demo.path}}>
                  Connect
                </Link>
              </div>
              <button
                type="button"
                className={'close'}
                aria-label="Close signup reminder"
                onClick={hideSignupReminder}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L13 13M25 25L13 13M13 13L25 1L1 25"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="content">
            {Array.from(buddiList, (buddiRow, rowIndex) => {
              let rowClassName = "row";
              rowClassName += rowIndex > 0 ? ' justify-content-center' : ' justify-content-md-center';
              return (
                <div className={rowClassName} key={`buddiRow-${rowIndex}`}>
                  {Array.from(buddiRow, (buddi, buddiIndex) => {
                    let boxClassName = 'box';
                    const selectedBuddiID = selectedBuddi ? selectedBuddi.id : ''
                    boxClassName += selectedBuddiID === buddi.id ? ' active' : '';
                    const buddiUIKey = `buddiIndex-${buddiIndex}`,
                          buddiStats = buddi.stats;
                    return (
                      <div className="col-6 col-xxl-4" key={buddiUIKey} data-id={buddi.id} onClick={handleBuddiSelection}>
                        <div className={ boxClassName }>
                          <div className="info">
                            <div className="row h-100 align-items-center">
                              <div className="col-5 details">
                                <div className="row row-cols-2">
                                  {Array.from(Object.keys(buddiStats), (statKey, keyIndex) => {
                                    return (
                                      <React.Fragment key={`${buddiUIKey}-${keyIndex}`}>
                                        <div className="col key">{statLabels[statKey]}</div>
                                        <div className="col para">{buddiStats[statKey]}</div>
                                      </React.Fragment>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="heading">
                            <h4>{buddi.name.toUpperCase()}</h4>
                          </div>
                          <div className="model">
                            <img src={buddi.imgUrl} />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="enter-a-race">
        <div className="wrap position-relative container-fluid">
          <div className="heading-wrap text-center">
            <hr />
            <h3>ENTER A RACE</h3>
            <hr />
          </div>
          <div className="content">
            <table className="table d-none d-sm-table w-100">
              <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col" style={{ width: "18%" }}>
                  Race name
                </th>
                <th scope="col" style={{ width: "18%" }}>
                  Course name
                </th>
                <th scope="col" style={{ width: "18%" }}>
                  Prize Pool
                </th>
                <th scope="col" style={{ width: "18%" }}>
                  Entrants
                </th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
              </thead>
              <tbody>
              {Array.from(raceList, (race, raceIndex) => {
                const maxEntrants = race.maxEntrants,
                      selectedRaceID = selectedRace ? selectedRace.id : '',
                      raceIsSelected = selectedRaceID === race.id && selectedBuddi,
                      currentEntrantsQty = raceIsSelected ? maxEntrants : maxEntrants - 1;
                return (
                  <tr key={`race-${raceIndex}`}>
                    <th scope="row">
                      <img src="img/ic_round-energy-savings-leaf.png" />
                    </th>
                    <td className="race-name">{race.name}</td>
                    <td>{race.course}</td>
                    <td>{`${race.prizePool} EC`}</td>
                    <td>{`${currentEntrantsQty}/${maxEntrants}`}</td>
                    <td style={{ textAlign: "center" }}>
                      <button
                        className={`primary-btn${raceIsSelected ? ' active' : ''}`}
                        aria-pressed={raceIsSelected}
                        data-bs-toggle="button"
                        disabled={!isLoaded || !selectedBuddi}
                        data-id={race.id}
                        onClick={handleRaceSelection}
                      >
                        Enter
                      </button>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <button
                        className="primary-btn"
                        disabled={!raceIsSelected}
                        onClick={handleStartGame}
                      >
                        Confirm
                      </button>
                    </td>
                  </tr>
                );
              })}
              </tbody>
            </table>
            {Array.from(raceList, (race, raceIndex) => {
              const maxEntrants = race.maxEntrants,
                selectedRaceID = selectedRace ? selectedRace.id : '',
                raceIsSelected = selectedRaceID === race.id && selectedBuddi,
                currentEntrantsQty = raceIsSelected ? maxEntrants : maxEntrants - 1;
              return (
                <div key={raceIndex} className="d-block d-sm-none box">
                  <div className="row">
                    <div className="col-2">
                      <img src="img/ic_round-energy-savings-leaf.png" />
                    </div>
                    <ul className="col-10 info">
                      <li className="race-name">{race.name}</li>
                      <li>{race.course}</li>
                      <li>
                        Prize pool: <span className="text-muted">{`${race.prizePool} EC`}</span>
                      </li>
                      <li>
                        Entrants: <span className="text-muted">{`${currentEntrantsQty}/${maxEntrants}`}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <button
                        className={`primary-btn${raceIsSelected ? ' active' : ''}`}
                        aria-pressed={raceIsSelected}
                        data-bs-toggle="button"
                        disabled={!isLoaded || !selectedBuddi}
                        data-id={race.id}
                        onClick={handleRaceSelection}
                      >
                        Enter
                      </button>
                    </div>
                    <div className="col-6">
                      <button
                        className="primary-btn"
                        disabled={!raceIsSelected}
                        onClick={handleStartGame}
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="race-play">
        <div className="container-fluid">
          <div className={'text-center'}>
            <div className="race-img text-center">
              <img src="img/RACE.png" />
            </div>
            <div
              className="video position-relative"
              style={{ display: isGameStarted ? "none" : "block" }}
            >
              <div className="center">
                <img src="img/spinning wheels obstacles large.png" />
              </div>
              { !isLoaded &&
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width: Math.round(loadingProgression * 100) + "%"}} aria-valuenow={Math.round(loadingProgression * 100)} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              }
              { isLoaded &&
                <div className="play-btn">
                  <img src="img/Vector 2.png"/>
                </div>
              }
            </div>
            {/*
              TODO: It seems the Unity component causes the following issue: Maximum update depth exceeded.
            */}
            <div className={`video-unity${isGameStarted ? ' active' : ''}`}>
              <Unity
                style={{ visibility: isLoaded ? "visible" : "hidden", position: "relative", width: "100%", height: "100%"}}
                unityProvider={unityProvider}
                devicePixelRatio={window.devicePixelRatio}
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>

  );
}
