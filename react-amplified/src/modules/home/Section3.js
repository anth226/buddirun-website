import React from "react";
import Buddi from "./Buddi"
import BuddiListHome from "../../assets/buddi-list-home.json"


export default function Section3() {
  return (
    <section className="section3">
      <div className="background"></div>
      <h1 className="section-h1">MEET SOME BUDDIS</h1>

      <div className="section3-content">
        <div className="container-fluid">
          <br/>
          <br/>
          <div className="flexContainer">
            {BuddiListHome.map(budd => (
              <div className="buddi flexItem">
                <Buddi imgUrl={budd.imgUrl} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
