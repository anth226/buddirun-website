import React from "react";

export default function Race() {
  return (
    <section className="race">
      <div className=" container-fluid">
        <h3>READY FOR A</h3>
        <div className="race-img text-center">
          <img src="img/RACE.png" />
        </div>
        <div className="slider d-none d-sm-flex">
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
            <img src="img/Vector 1.png" />
          </div>
        </div>
        <div className="slider-responsive d-block d-sm-none">
          <div className="position-relative">
            <div className="center">
              <img src="img/spinning wheels obstacles 1.png" />
            </div>
            <div className="play-btn">
              <img src="img/Vector 1.png" />
            </div>
          </div>
          <div className="slide-bar d-flex">
            <div className="slide-item"></div>
            <div className="slide-item center"></div>
            <div className="slide-item"></div>
          </div>
        </div>
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit nisi
          sapien leo lorem etiam sed facilisi. Pharetra, orci hendrerit maecenas
          amet tortor tempus. Pellentesque et ornare nunc ac leo. Сonsectetur
          adipiscing elit. Blandit nisi sapien leo lorem etiam sed facilisi.
          Pharetra, orci hendrerit
        </p>
        <h1>GAME PLAY ELEMENTS</h1>
        <div className="row mx-auto">
          <div className="col-12 col-lg-5">
            <div className="gameplay-img">
              <img src="img/Asset 3 3.png" />
            </div>
          </div>
          <div className="col-12 col-lg-7">
            <div className="race-box">
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
          </div>
        </div>
      </div>
    </section>
  );
}
