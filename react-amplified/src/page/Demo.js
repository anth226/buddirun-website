import React, {useCallback, useEffect, useState} from "react";
import Footer from "../modules/layout/FooterLayout";
import Header from "../modules/layout/HeaderLayout";
import { Unity, useUnityContext } from "react-unity-webgl";
import BuddiList from "../assets/buddi-list.json";
import { randomIntFromInterval } from "../assets/utils";

export default function Demo() {
  const [buddiList, setBuddiList] = useState([[],[]]), // NOTE: For sake of speed, I'll keep the concept of rows enforced in the UI
        [raceList, setRaceList] = useState([]),
        [isGameOver, setIsGameOver] = useState(false),
        [userName, setUserName] = useState(),
        [selectedBuddi, setSelectedBuddi] = useState(),
        [raceID, setRaceID] = useState(),
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

  const { unityProvider, isLoaded, loadingProgression, sendMessage, addEventListener, removeEventListener } = useUnityContext({
    loaderUrl: "unity/ProjectXeonBuild.loader.js",
    dataUrl: "unity/ProjectXeonBuild.data",
    frameworkUrl: "unity/ProjectXeonBuild.framework.js",
    codeUrl: "unity/ProjectXeonBuild.wasm",
  });

  const handleShowWinner = useCallback((userName, score) => {
    // setIsGameOver(true);
    // setUserName(userName);
    // setScore(score);
  }, []);
  useEffect(() => {
    fetchRandomBuddis();
    addEventListener("onGameEnd", handleShowWinner);
    return () => {
      removeEventListener("onGameEnd", handleShowWinner);
    };
  }, [addEventListener, removeEventListener, handleShowWinner]);

  const handleStartGame = () => {
    const gameParams = {
      playerID: '', // ID of the selected Buddi
      // race: raceID,
    };
    sendMessage("JavaScriptInterface", "StartGame", JSON.stringify(gameParams));
  }

  const buddiStatsUI = (buddiStats) => {
    if (!buddiStats) return '';
    const statLabels = {
      speed: 'Speed',
      intel: 'Intell',
      fitness: 'Finess',
      accel: 'Accel',
      jump: 'Jump',
    }
    return Object.keys(buddiStats).map((statKey, keyIndex) => {
      return <>
        <div className="col key">{statLabels[statKey]}</div>
        <div className="col para">{buddiStats[statKey]}</div>
      </>
    });
  }

  const buddiItemUI = (buddiRow, rowIndex) => {
    if (!buddiRow) return '';
    return buddiRow.map((buddi, buddiIndex) => {
      let boxClassName = 'box';
      if (selectedBuddi === buddi.id) {
        boxClassName += ' active';
      }
      return <div className="col-6 col-xxl-4" key={`buddiIndex-${buddiIndex}`} onClick={() => setSelectedBuddi(buddi.id)}>
        <div className={ boxClassName }>
          <div className="info">
            <div className="row h-100 align-items-center">
              <div className="col-5 details">
                <div className="row row-cols-2">
                  { buddiStatsUI(buddi.stats) }
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
      </div>;
    });
  }

  const buddiListUI = buddiList.map((buddiRow, rowIndex) => {
    let rowClassName = "row";
    if (rowIndex > 0) {
      rowClassName += ' justify-content-center';
    } else {
      rowClassName += ' justify-content-md-center';
    }
    return <div className={rowClassName} key={`buddiRow-${rowIndex}`}>
      { buddiItemUI(buddiRow) }
    </div>;
  })

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
            <h4>0001</h4>
            <img src="img/VGC2-2-Energy_Cell_V01-final 1.png" />
          </div>
          <div className="content">
            { buddiListUI }
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
              {Array.from(Array(4), (e, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">
                      <img src="img/ic_round-energy-savings-leaf.png" />
                    </th>
                    <td className="race-name">Race name</td>
                    <td>Course name</td>
                    <td>10</td>
                    <td>9/10</td>
                    <td style={{ textAlign: "center" }}>
                      <button className="primary-btn">Enter</button>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <button className="primary-btn">Confirm</button>
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
        {/*
        <div className="container-fluid">
          <div>
            <div className="race-img text-center">
              <img src="img/RACE.png" />
            </div>
            <div className="video position-relative">
              <div className="center">
                <img src="img/spinning wheels obstacles large.png" />
              </div>
              <div className="play-btn">
                <img src="img/Vector 2.png" />
              </div>
            </div>
          </div>
        </div>
        */}
        { !isLoaded &&
        <div className="progress">
          <div className="progress-bar" role="progressbar" style={{width: Math.round(loadingProgression * 100) + "%"}} aria-valuenow={Math.round(loadingProgression * 100)} aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        }
        <Unity
          style={{ visibility: isLoaded ? "visible" : "hidden" }}
          unityProvider={unityProvider}
        />
      </section>
      <Footer />
    </div>
  );
}
