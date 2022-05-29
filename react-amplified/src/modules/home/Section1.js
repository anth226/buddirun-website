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
              <svg
                width="52"
                height="52"
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
              PLAY VIDEO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
