import React from "react";

export default function Community() {
  return (
    <section className="community" id="community">
      <div className="background"></div>
      <div className="container-fluid community-wrap">
        <div className="community-join  text-center">
          <img src="img/JOIN.png" />
        </div>
        <div className="community-box">
          <h3>JOIN THE BUDDI RUN COMMUNITY</h3>
        </div>
        <div className="community-web d-flex flex-row justify-content-center">
          <a
            href="https://discord.gg/U4tsfjvcWP"
            target="_blank"
            className="icon"
          >
            <img src="img/discordBtnBig.png"/>
          </a>
          <a
            href="https://twitter.com/BuddiRun"
            target="_blank"
            className="icon"
          >
            <img src="img/twitterBtnBig.png"/>
          </a>
        </div>
      </div>
    </section>
  );
}
