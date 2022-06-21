import React from "react";

export default function Team() {
  return (
    <section className="team" id="team">
      <div className="background"></div>
      <div className="team-wrap">
        <div className="heading-wrap text-center">
          <hr />
          <h3>TEAM</h3>
          <hr />
        </div>
        <div className="team-content">
          <div className="d-flex flex-row flex-wrap justify-content-center">
            <div className="d-flex flex-column align-items-center team-member">
              <div className="avatar">
                <img src="img/Rectangle 12.png" />
              </div>
              <h4>Ben Abramowitzh</h4>
              <span>Operations & Marketing</span>
            </div>
            <div className="d-flex flex-column align-items-center team-member">
              <div className="avatar">
                <img src="img/Rectangle 6.png" />
              </div>
              <h4>James Carroll</h4>
              <span>Senior Unity Dev</span>
            </div>
            <div className="d-flex flex-column align-items-center team-member">
              <div className="avatar">
                <img src="img/Rectangle 5.png" />
              </div>
              <h4>Greg Gegoux</h4>
              <span>Senior Web Dev</span>
            </div>
            <div className="d-flex flex-column align-items-center team-member">
              <div className="avatar">
                <img src="img/16 2.png" />
              </div>
              <h4>Sasha Abramowitz</h4>
              <span>AI & Unity Dev</span>
            </div>
            <div className="d-flex flex-column align-items-center team-member">
              <div className="avatar">
                <img src="img/Rectangle 9.png" />
              </div>
              <h4>Raphael Carrier</h4>
              <span>Tech Lead</span>
            </div>
            <div className="d-flex flex-column align-items-center team-member">
              <div className="avatar">
                <img src="img/Rectangle 7.png" />
              </div>
              <h4>Luismi Olmedo</h4>
              <span>Creature Artist</span>
            </div>
            <div className="d-flex flex-column align-items-center team-member">
              <div className="avatar">
                <img src="img/Rectangle 3.png" />
              </div>
              <h4>Alexander Alin</h4>
              <span>3D Character Artist</span>
            </div>
            <div className="d-flex flex-column align-items-center team-member">
              <div className="avatar">
                <img src="img/Rectangle 8.png" />
              </div>
              <h4>Pedro Martinez</h4>
              <span>3D Generalist</span>
            </div>
            <div className="d-flex flex-column align-items-center team-member">
              <div className="avatar">
                <img src="img/Rectangle 4.png" />
              </div>
              <h4>Tucker Hicks</h4>
              <span>Community manager</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
