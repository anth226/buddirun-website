import React from "react";
import Header from "../layout/HeaderLayout";
import {APP_ROUTES} from "../../app/routes";
import { Link } from "react-router-dom";

export default function Section1() {
  return (
    <section className="section1">
      <div className="container-fluid">
        <Header />
        <div className="section-wrap">
          <div className="section1-box position-relative text-center">
            <div>
              <h2>LITTLE FRIENDS TO OWN AND RACE</h2>
              <p>
              Care, Breed, Race and Win with your unique Buddi. 
              </p>
            </div>
            <Link to={APP_ROUTES.Race.path}>
              <button className="btn btn-playvideo text-center">RACE A BUDDI</button>
            </Link>
          </div>
          <div className="position-absolute social-links-float">
            <div className="w-auto m-1">
              <a
                href="https://discord.gg/U4tsfjvcWP"
                target="_blank"
                className="social-icon d-flex align-items-center justify-content-center"
              >
                <img src="img/discordBtn.png"/>
              </a>
            </div>
            <div className="w-auto m-1">
              <a
                href="https://twitter.com/BuddiRun"
                target="_blank"
                className="social-icon d-flex align-items-center justify-content-center"
                >
                <img src="img/twitterBtn.png"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
