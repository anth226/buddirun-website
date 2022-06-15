import React, {useCallback, useEffect, useState} from "react";
import Footer from "../modules/layout/FooterLayout";
import Header from "../modules/layout/HeaderLayout";
import { Unity, useUnityContext } from "react-unity-webgl";
import BuddisList from "../buddis-list.json";

export default function Demo() {
  const [isGameOver, setIsGameOver] = useState(false);
  const [userName, setUserName] = useState();
  const [buddiID, setBuddiID] = useState();
  const [raceID, setRaceID] = useState();
  const [score, setScore] = useState();

  const getRandomBuddis = () => {

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
            <div className="row justify-content-md-center">
              <div className="col-6 col-xxl-4">
                <div className="box active">
                  <div className="info">
                    <div className="row h-100 align-items-center">
                      <div className="col-5 details">
                        <div className="row row-cols-2">
                          <div className="col key">Speed</div>
                          <div className="col para">0.1</div>
                          <div className="col key">Intell</div>
                          <div className="col para">0.1</div>
                          <div className="col key">Finess</div>
                          <div className="col para">0.1</div>
                          <div className="col key">Accel</div>
                          <div className="col para">0.1</div>
                          <div className="col key">Jump</div>
                          <div className="col para">0.1</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="heading">
                    <h4>SPIDER</h4>
                  </div>
                  <div className="model">
                    <img src="img/Asset 2.png" />
                  </div>
                </div>
              </div>
              <div className="col-6 col-xxl-4">
                <div className="box">
                  <div className="info">
                    <div className="row h-100 align-items-center">
                      <div className="col-5 details">
                        <div className="row row-cols-2">
                          <div className="col key">Speed</div>
                          <div className="col para">0.1</div>
                          <div className="col key">Intell</div>
                          <div className="col para">0.1</div>
                          <div className="col key">Finess</div>
                          <div className="col para">0.1</div>
                          <div className="col key">Accel</div>
                          <div className="col para">0.1</div>
                          <div className="col key">Jump</div>
                          <div className="col para">0.1</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="heading">
                    <h4>ARMADILLO</h4>
                  </div>
                  <div className="model">
                    <img src="img/Asset 3.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-6 col-xxl-4">
                <div className="box">
                  <div className="info">
                    <div className="row h-100 align-items-center">
                      <div className="col-5 details">
                        <div className="row row-cols-2">
                          <div className="col key">Speed</div>
                          <div className="col para">0.1</div>
                          <div className="col key">Intell</div>
                          <div className="col para">0.1</div>
                          <div className="col key">Finess</div>
                          <div className="col para">0.1</div>
                          <div className="col key">Accel</div>
                          <div className="col para">0.1</div>
                          <div className="col key">Jump</div>
                          <div className="col para">0.1</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="heading">
                    <h4>WHALE</h4>
                  </div>
                  <div className="model">
                    <img src="img/Asset 1.png" />
                  </div>
                </div>
              </div>
              <div className="col-6 col-xxl-4">
                <div className="box">
                  <div className="info">
                    <div className="row h-100 align-items-center">
                      <div className="col-5 details">
                        <div className="row row-cols-2">
                          <div className="col key">Speed</div>
                          <div className="col para">0.1</div>
                          <div className="col key">Intell</div>
                          <div className="col para">0.1</div>
                          <div className="col key">Finess</div>
                          <div className="col para">0.1</div>
                          <div className="col key">Accel</div>
                          <div className="col para">0.1</div>
                          <div className="col key">Jump</div>
                          <div className="col para">0.1</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="heading">
                    <h4>CROCODILE</h4>
                  </div>
                  <div className="model">
                    <img src="img/Asset 5.png" />
                  </div>
                </div>
              </div>
              <div className="col-6 col-xxl-4">
                <div className="box">
                  <div className="info">
                    <div className="row h-100 align-items-center">
                      <div className="col-5 details">
                        <div className="row row-cols-2">
                          <div className="col key">Speed</div>
                          <div className="col para">0.1</div>
                          <div className="col key">Intell</div>
                          <div className="col para">0.1</div>
                          <div className="col key">Finess</div>
                          <div className="col para">0.1</div>
                          <div className="col key">Accel</div>
                          <div className="col para">0.1</div>
                          <div className="col key">Jump</div>
                          <div className="col para">0.1</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="heading">
                    <h4>SLOTH</h4>
                  </div>
                  <div className="model">
                    <img src="img/furboy_item_31_32_quarter 1.png" />
                  </div>
                </div>
              </div>
            </div>
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
