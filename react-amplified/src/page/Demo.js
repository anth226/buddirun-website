import React, {useCallback, useEffect, useState} from "react";
import Footer from "../modules/layout/FooterLayout";
import Header from "../modules/layout/HeaderLayout";
import { Unity, useUnityContext } from "react-unity-webgl";
import BuddiList from "../assets/buddi-list.json";
import RaceList from "../assets/race-list.json";
import { formatNumber, randomIntFromInterval } from "../assets/utils";
import { DatastoreStatus, useDatastoreContext } from "../lib/contextLib";
import AppUser from "../appModels/AppUser";

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
        [isGameOver, setIsGameOver] = useState(false),
        [userName, setUserName] = useState(),
        [selectedBuddi, setSelectedBuddi] = useState(null),
        [selectedRace, setSelectedRace] = useState(null),
        [score, setScore] = useState();

  const fetchRandomBuddis = () => {
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
  }

  const fetchRandomRaces = () => {
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
  }

  const datastoreStatus = useDatastoreContext();

  // NOTE: Blocking Unity loader until optimized
  const { unityProvider, isLoaded, loadingProgression, sendMessage, addEventListener, removeEventListener } = useUnityContext({
    loaderUrl: "unity/ProjectXeonBuild.loader.js",
    dataUrl: "unity/ProjectXeonBuild.data",
    frameworkUrl: "unity/ProjectXeonBuild.framework.js",
    codeUrl: "unity/ProjectXeonBuild.wasm",
  });

  const handleBuddiSelection = (selectedBuddiID) => {
    if (selectedBuddi === selectedBuddiID) {
      setSelectedBuddi(null);
      setSelectedRace(null);
    } else {
      setSelectedBuddi(selectedBuddiID);
    }
  }

  const handleRaceSelection = (selectedRaceID) => {
    if (selectedRace === selectedRaceID) {
      setSelectedRace(null);
    } else {
      setSelectedRace(selectedRaceID);
    }
  }

  const handleStartGame = () => {
    console.log('START GAME', isLoaded);
    if (!isLoaded) {
      console.warn("Can't start game, Unity is not loaded");
      return false;
    }
    const gameParams = {
      playerID: selectedBuddi, // ID of the selected Buddi
      // race: selectedRace,
    };
    sendMessage("JavaScriptInterface", "StartGame", JSON.stringify(gameParams));
    setIsGameStarted(true);
  }

  const handleEndGame = useCallback((userName, score) => {
    // setIsGameOver(true);
    // setUserName(userName);
    // setScore(score);
    console.log('TEST END GAME', userName, score);
    const reward = randomIntFromInterval(0,6);
    console.log('FAKE REWARD', reward);
    let stockData = {}
    setUserStock(currentStock => {
      stockData = {
        ...currentStock,
        energyCell: currentStock.energyCell + reward
      }
      return stockData;
    });

    if (datastoreStatus === DatastoreStatus.LOGGED_IN) {
      const appUserModel = AppUser.getInstance();
      appUserModel.updateProfileData(stockData)
        .then((res) => {
          console.log('USER PROFILE IS UPDATED');
        })
        .catch((err) => {
          console.error('An error occurred while updating user profile\n', err);
        });
    }
  }, []);

  useEffect(() => {
    if (datastoreStatus === DatastoreStatus.LOGGED_IN) {
      const appUserModel = AppUser.getInstance();
      appUserModel.getOrCreateUser()
        .then((appUser) => {
          setUserStock(appUser.data.rewards || {
            energyCell: 0
          });
        })
        .catch((err) => {
          console.warn(err);
        });
    }
    fetchRandomBuddis();
    fetchRandomRaces();
    addEventListener("onEndGame", handleEndGame);
    return () => {
      removeEventListener("onEndGame", handleEndGame);
    };
  }, [
    addEventListener,
    removeEventListener,
    handleEndGame,
    datastoreStatus,
    userStock,
    setUserStock,
    isGameStarted,
    setIsGameStarted,
    selectedBuddi,
    setSelectedBuddi,
  ]);

  return (
    <div>
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
          <div className="energy-cell d-flex">
            <h4>{ formatNumber(userStock.energyCell) }</h4>
            <img src="img/VGC2-2-Energy_Cell_V01-final 1.png" />
          </div>
          <div className="content">
            {Array.from(buddiList, (buddiRow, rowIndex) => {
              let rowClassName = "row";
              rowClassName += rowIndex > 0 ? ' justify-content-center' : ' justify-content-md-center';
              return (
                <div className={rowClassName} key={`buddiRow-${rowIndex}`}>
                  {Array.from(buddiRow, (buddi, buddiIndex) => {
                    let boxClassName = 'box';
                    boxClassName += selectedBuddi === buddi.id ? ' active' : '';
                    const buddiUIKey = `buddiIndex-${buddiIndex}`,
                          buddiStats = buddi.stats;
                    return (
                      <div className="col-6 col-xxl-4" key={buddiUIKey} onClick={() => handleBuddiSelection(buddi.id)}>
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
                      raceIsSelected = selectedRace === race.id && selectedBuddi,
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
                        onClick={() => handleRaceSelection(race.id)}
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
            {Array.from(Array(4), (e, i) => {
              return (
                <div key={i} className="d-block d-sm-none box">
                  <div className="row">
                    <div className="col-2">
                      <img src="img/ic_round-energy-savings-leaf.png" />
                    </div>
                    <ul className="col-10 info">
                      <li className="race-name">Race name</li>
                      <li>Course name</li>
                      <li>
                        Prize pool: <span className="text-muted">10</span>
                      </li>
                      <li>
                        Entrants: <span className="text-muted">9/10</span>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <button className="primary-btn">Enter</button>
                    </div>
                    <div className="col-6">
                      <button className="primary-btn">Confirm</button>
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
          <div>
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
            <Unity
              style={{ visibility: isLoaded ? "visible" : "hidden", width: isGameStarted ? "100%" : "0%", position: "relative" }}
              unityProvider={unityProvider}
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
