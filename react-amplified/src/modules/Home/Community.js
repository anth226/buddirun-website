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
          <div className="icon">
            <img src="img/simple-icons_discord.png" />
          </div>
          <div className="icon">
            <img src="img/akar-icons_twitter-fill.png" />
          </div>
        </div>
      </div>
    </section>
  );
}
