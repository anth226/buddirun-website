import React, { useEffect, useState } from "react";

export default function Race() {
  const [element, setElement] = useState("breed");

  return (
    <section className="race">
      <div className=" container-fluid">
        <h3>READY FOR A</h3>
        <div className="race-img text-center">
          <img src="img/RACE.png" />
        </div>
        <div className="slider d-none d-sm-flex position-relative align-items-center justify-content-center">
          <div className="pre-btn">
            <img src="img/Asset 3 1.png" />
          </div>
          <div className="previous">
            <img src="img/Asset 1 8.png" />
          </div>
          <div className="center">
            <img src="img/spinning wheels obstacles 1.png" />
          </div>
          <div className="next">
            <img src="img/Asset 1 8.png" />
          </div>
          <div className="next-btn">
            <img src="img/Asset 2 1.png" />
          </div>
          <div className="play-btn">
            <svg
              width="87"
              height="106"
              viewBox="0 0 87 106"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.18156e-06 53L7.26637e-06 5.30496C7.42507e-06 1.67439 3.981 -0.550166 7.073 1.35261L84.5774 49.0476C87.5222 50.8598 87.5222 55.1402 84.5774 56.9524L7.07299 104.647C3.98099 106.55 2.93804e-06 104.326 3.09674e-06 100.695L5.18156e-06 53Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div className="slider-responsive d-block d-sm-none">
          <div className="position-relative">
            <div className="center">
              <img src="img/spinning wheels obstacles 1.png" />
            </div>
            <div className="play-btn">
              <svg
                width="87"
                height="106"
                viewBox="0 0 87 106"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.18156e-06 53L7.26637e-06 5.30496C7.42507e-06 1.67439 3.981 -0.550166 7.073 1.35261L84.5774 49.0476C87.5222 50.8598 87.5222 55.1402 84.5774 56.9524L7.07299 104.647C3.98099 106.55 2.93804e-06 104.326 3.09674e-06 100.695L5.18156e-06 53Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className="slide-bar d-flex">
            <div className="slide-item"></div>
            <div className="slide-item center"></div>
            <div className="slide-item"></div>
          </div>
        </div>
        <p className="paragraph">
        Buddi are ready to race as soon as they are born. <br/>
        Players enter Buddis into individual races or tournaments to win prize pools of Race Entry Tickets or Energy Cells.
        </p>
        <h1>GAME PLAY ELEMENTS</h1>
        <div className="row mx-auto">
          <div
            className="col-12 col-lg-5 position-relative"
          >
            <div className="gameplay-box mx-auto">
              <div className="row row-cols-2 w-100 h-100 mx-0">
                <div
                  className="gameplay-item"
                  onMouseOver={() => {
                    setElement("generate");
                  }}
                ></div>
                <div
                  className="gameplay-item"
                  onMouseOver={() => {
                    setElement("breed");
                  }}
                ></div>
                <div
                  className="gameplay-item"
                  onMouseOver={() => {
                    setElement("bond");
                  }}
                ></div>
                <div
                  className="gameplay-item"
                  onMouseOver={() => {
                    setElement("wearables");
                  }}
                ></div>
              </div>
            </div>
            <div
              className={`gameplay-element ${
                element === "generate" && "active"
              }`}
            >
              <div className="gameplay-img">
                <img
                  src="img/Frame 72.png"
                  className="elementImage"
                />
              </div>
            </div>
            <div
              className={`gameplay-element ${element === "breed" && "active"}`}
            >
              <div className="gameplay-img">
                <img src="img/Frame 3613.png" />
              </div>
            </div>
            <div
              className={`gameplay-element ${element === "bond" && "active"}`}
            >
              <div className="gameplay-img element-3">
                <img src="img/Frame 3611.png" />
              </div>
            </div>
            <div
              className={`gameplay-element ${
                element === "wearables" && "active"
              }`}
            >
              <div className="gameplay-img">
                <img src="img/Frame 3612.png" />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7 position-relative">
            <div
              className={`race-box d-flex flex-column ${
                element === "generate" && "active"
              }`}
            >
              <div className="title">
                <h4>GENERATE ENERGY</h4>
              </div>
              <div className="content">
                <p>
                  Energy is the key resource in Buddi Run. By placing a Buddi on
                  a powerband, players are able to fill the energy cells that
                  are used throughout the Buddi Run universe.
                </p>
              </div>
              <img src="img/Asset 2 3.png" />
            </div>
            <div
              className={`race-box d-flex flex-column ${
                element === "breed" && "active"
              }`}
            >
              <div className="title">
                <h4>BREED</h4>
              </div>
              <div className="content">
                <p>
                  Players are able to breed new BuddiNFTs by splicing together 2
                  unique GeneticFragmentNFTs using a SpliceAgent NFT. Owners are
                  able to extract GeneticFragmentNFTs from their Buddis to use
                  or sell on the market.
                </p>
              </div>
              <img src="img/Asset 4 1.png" />
            </div>
            <div
              className={`race-box d-flex flex-column ${
                element === "bond" && "active"
              }`}
            >
              <div className="title">
                <h4>BOND</h4>
              </div>
              <div className="content">
                <p>
                  The bond between an Owner and their Buddi begins when it is
                  born and is sealed the first time the Buddi finishes in a
                  race. Owners can nurture their Buddis through petting,
                  feeding, and extending their lives by generating energy and
                  racing.
                </p>
              </div>
              <img src="img/Asset 7.png" />
            </div>
            <div
              className={`race-box d-flex flex-column ${
                element === "wearables" && "active"
              }`}
            >
              <div className="title">
                <h4>WEARABLES</h4>
              </div>
              <div className="content">
                <p>
                  Wearable NFT items add or enhance a skill of the Buddi wearing
                  it. Items can be bought in the shop, traded on the market and
                  crafted when a player's Buddi(s) have collected enough
                  materials.
                </p>
              </div>
              <img src="img/Asset 5 1.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
