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
        {viewPost.width > 768 ? (
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
                    stroke-width="11.44"
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
                      <stop stop-color="#76DDFA" />
                      <stop offset="1" stop-color="#7166DB" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_0_1"
                      x1="26.0001"
                      y1="15.6001"
                      x2="26.0001"
                      y2="36.4001"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#76DCFA" />
                      <stop offset="1" stop-color="#7068DC" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <div className="roadmap-flow">
            <img src="img/Group 19 2.png" />
          </div>
        )}
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
                      <span>May, 2022</span>
                    </div>
                  </div>
                </div>
                <div className="milestones left">
                  <span className="text-right">
                    Learn about Buddi Run and try the racing Demo.
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
                      <span>June, 2022</span>
                    </div>
                  </div>
                </span>
                <br />
                <div className="milestones right">
                  <span className="text-right">
                    Learn about Buddi Run and try the racing Demo.
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
                      <h3>Public Pre-sale</h3>
                      <span>September, 2022</span>
                    </div>
                  </div>
                </span>
                <br />
                <div className="milestones left">
                  <span className="text-right">
                    Learn about Buddi Run and try the racing Demo.
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
                      <h3>Soft Lauch</h3>
                      <span>October, 2022</span>
                    </div>
                  </div>
                </span>
                <br />
                <div className="milestones right">
                  <span className="text-right">
                    Learn about Buddi Run and try the racing Demo.
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
                      <h3>Website Launch</h3>
                      <span>December, 2022</span>
                    </div>
                  </div>
                </span>
                <br />
                <div className="milestones left">
                  <span className="text-right">
                    Learn about Buddi Run and try the racing Demo.
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
