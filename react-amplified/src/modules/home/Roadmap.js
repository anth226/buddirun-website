import React from "react";

export default function Roadmap() {
  const useViewport = () => {
    const [width, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return { width };
  };

  const viewPost = useViewport();
  return (
    <section className="roadmap" id="roadmap">
      <div className="background"></div>
      <div className="container-fluid roadmap-wrap">
        <div className="roadmap-flow">
          <img src="img/Group 19.png" />
          <div className="position-relative w-100 h-100">
            <div className="final">
              <svg
                width="100"
                height="100"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="26"
                  cy="26"
                  r="20.28"
                  stroke="url(#paint0_linear_0_1)"
                  strokeWidth="11.44"
                />
                <circle
                  cx="26.0001"
                  cy="26.0001"
                  r="10.4"
                  fill="url(#paint1_linear_0_1)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_0_1"
                    x1="26"
                    y1="0"
                    x2="26"
                    y2="52"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#76DDFA" />
                    <stop offset="1" stopColor="#7166DB" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_0_1"
                    x1="26.0001"
                    y1="15.6001"
                    x2="26.0001"
                    y2="36.4001"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#76DCFA" />
                    <stop offset="1" stopColor="#7068DC" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="roadmap-heading text-center">
          <h3>ROAD MAP</h3>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="row clearfix left justify-content-lg-center">
              <div className="col-lg-5 box left first reveal">
                <div className="heading">
                  <div className="position-relative w-100 h-100">
                    <img src="img/Asset 2 12.png" />
                    <div className="content">
                      <h3>Promo Site Live</h3>
                      <span>July, 2022</span>
                    </div>
                  </div>
                </div>
                <div className="milestones left">
                  <span className="text-right">
                    -Buddirun.com Promo site is live.<br/>
                    -Players can race a Buddi to win in-game assets.<br/>
                    -Daily drops to players who race and are active on BR’s Discord server
                  </span>
                </div>
              </div>
              <div className="col-lg-1">
                <div className="lines first">
                  <div className="roadmap-line first" />
                  <div className="roadmap-line second" />
                </div>
              </div>
              <div className="col-lg-5 box right first reveal">
                <span className="heading">
                  <div className="position-relative w-100 h-100">
                    <img src="img/Asset 2 12.png" />
                    <div className="content">
                      <h3>Private Pre-sale</h3>
                      <span>August, 2022</span>
                    </div>
                  </div>
                </span>
                <br />
                <div className="milestones right">
                  <span className="text-right">
                    Sale of 2,500 BuddiNFTs to private buyers.
                  </span>
                </div>
              </div>
            </div>
            <div className="row clearfix left justify-content-lg-center">
              <div className="col-lg-5 box left second reveal">
                <span className="heading">
                  <div className="position-relative w-100 h-100">
                    <img src="img/Asset 2 12.png" />
                    <div className="content">
                      <h3>Public Pre-sale 1/2</h3>
                      <span>November, 2022</span>
                    </div>
                  </div>
                </span>
                <br />
                <div className="milestones left">
                  <span className="text-right">
                    Pre-Sale of BuddiNFTs in groups of 2,500.<br/>
                    500 of each animal type.
                  </span>
                </div>
              </div>
              <div className="col-lg-1">
                <div className="lines second">
                  <div className="roadmap-line first" />
                  <div className="roadmap-line second" />
                </div>
              </div>
              <div className="col-lg-5 box right second reveal">
                <span className="heading">
                  <div className="position-relative w-100 h-100">
                    <img src="img/Asset 2 12.png" />
                    <div className="content">
                      <h3>Soft Launch</h3>
                      <span>December, 2022</span>
                    </div>
                  </div>
                </span>
                <br />
                <div className="milestones right">
                  <span className="text-right">
                    Game Website Available.<br/>
                    Players will be able to: Race, care and generate energy.
                  </span>
                </div>
              </div>
            </div>
            <div className="row clearfix left justify-content-lg-center">
              <div className="col-lg-5 box left third reveal">
                <span className="heading">
                  <div className="position-relative w-100 h-100">
                    <img src="img/Asset 2 12.png" />
                    <div className="content">
                      <h3>Full Launch</h3>
                      <span>February, 2023</span>
                    </div>
                  </div>
                </span>
                <br />
                <div className="milestones left">
                  <span className="text-right">
                    Full Game Website Launch<br/>
                    Splicing & Genetic Fragment Extraction Available
                  </span>
                </div>
              </div>
              <div className="col-lg-1">
                <div className="lines third">
                  <div className="roadmap-line" />
                </div>
              </div>
              <div className="col-lg-5"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
