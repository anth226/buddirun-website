import React from "react";
import Header from "../Layout/HeaderLayout";

export default function Section1() {
  return (
    <section className="section1">
      <div className="container-fluid">
        <Header />
        <div className="section-wrap">
          <div className="section1-box position-relative">
            <div>
              <h2>LITTLE FRIENDS TO OWN AND RACE</h2>
              <p>
                Buddi Run is an idle blockchain racing game which brings
                together sentient creature ownership in an exciting racing
                universe. Players create and own unique NFT creatures which they
                interact with and develop through playing the game. Players can
                choose numerous gameplay pathways - either racing, petting or
                splicing Buddis. It‘s up to each player to strategize how they
                earn value while playing the game.
              </p>
            </div>
            <button className="btn btn-playvideo">
              <img src="img/Ellipse 6.png" width="52px" height="52px" />
              PLAY VIDEO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
