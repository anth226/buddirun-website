import React, { useEffect, useState } from "react";

export default function Race() {
  const [element, setElement] = useState("breed");
  // List of the Gameplay elements
  const elementsList = ["breed", "wearables", "bond", "generate"];
  // Initial element to start the loop (from elementsList)
  let initElement = 0;

  useEffect(() => {
    const gamePlayElAnimInterval = setInterval(() => {
      setElement(elementsList[initElement]);
      if (elementsList[initElement + 1] != null) {
        initElement = initElement + 1;
      } else {
        initElement = 0;
      }
    }, 3000);

    // eslint-disable-next-line no-global-assign
    return (stop = (e) => {
      const gameElID = e?.currentTarget.dataset.id;
      clearInterval(gamePlayElAnimInterval);
      setElement(gameElID);
    });
  }, [setInterval, clearInterval, setElement]);

  return (
    <section className="race">
      <div className=" container-fluid">
        <h3>READY FOR A</h3>
        <div className="race-img text-center">
          <img src="img/RACE.png" />
        </div>
        <div
          className="text-center video-container"
          style={{
            marginTop: "-20px",
            position: "relative",
            display: "flex",
            gap: "7rem",
            justifyContent: "space-between",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/dfWVx6HW2EQ"
            className="video1"
            style={{
              aspectRatio: 16 / 9,
              border: "5px solid white",
              borderRadius: "30px",
              flex: 1,
              boxShadow:
                "0 40px 40px 0 rgba(0, 0, 0, 0.5), 0 20px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <iframe
            src="https://www.youtube.com/embed/hoTiLBeS9sc"
            className="video2"
            style={{
              aspectRatio: 16 / 9,
              border: "5px solid white",
              borderRadius: "30px",
              flex: 1,
              boxShadow:
                "0 40px 40px 0 rgba(0, 0, 0, 0.5), 0 20px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <p className="paragraph">
          Buddis love to run, but they live to race. The autonomous little bi-podal digital creatures are very competitive and don’t require their owner’s help during a race. Races with 8 entrants or tournaments with 1,000 are all the same to a Buddi; a chance to be first across the finish line.
        </p>
        <h1 className="section-h1">GAME PLAY ELEMENTS</h1>
        <div className="row mx-auto">
          <div className="col-12 col-lg-5 position-relative">
            <div className="gameplay-box mx-auto">
              <div className="row row-cols-2 w-100 h-100 mx-0">
                <div
                  className="gameplay-item"
                  data-id={"generate"}
                  onClick={stop}
                ></div>
                <div
                  className="gameplay-item"
                  data-id={"breed"}
                  onClick={stop}
                ></div>
                <div
                  className="gameplay-item"
                  data-id={"bond"}
                  onClick={stop}
                ></div>
                <div
                  className="gameplay-item"
                  data-id={"wearables"}
                  onClick={stop}
                ></div>
              </div>
            </div>
            <div
              className={`gameplay-element ${
                element === "generate" && "active"
              }`}
            >
              <div className="gameplay-img">
                <img src="img/Frame 72.png" className="elementImage" />
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
          <div className="col-12 col-lg-7 position-relative gameplay-boxes">
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
                  crafted when a player&apos;s Buddi(s) have collected enough
                  materials.
                </p>
              </div>
              <img src="img/Asset 5 1.png" />
            </div>
          </div>
        </div>
        <p className="paragraph2">
          EXO Labs is working to collect enough digitized DNA from the first 5 Origin Buddis to create 10,000 Origin BuddisNFTs with unique skill values and aesthetic textures.<br/>
          <br/>
          Shortly before the full Buddi Run game site is ready to launch, a public pre-sale of some BuddiNFT’s will be held to fund final development.<br/>
          <br/>
          While the Buddis race planet is being built, players who want to get onto the pre-sale whitelist and be eligible for daily drops of in-game items, will have a much higher chance if they’re active in the BR discord server and enter a few races daily.
        </p>
      </div>
    </section>
  );
}
