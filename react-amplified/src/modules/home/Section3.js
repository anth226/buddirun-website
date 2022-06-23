import React from "react";
import Buddi from "./Buddi"
import BuddiesList from "../../assets/buddis.json"


export default function Section3() {
  return (
    <section className="section3">
      <div className="background"></div>
      <div className="section3-content">
        <div className="container-fluid">
        <br/><br/>
          <div className="row justify-content-md-center justify-content-sm-center">
            <div className="col-6 col-lg-4 offset-xxl-1 col-xxl-2">
              <Buddi imgUrl={BuddiesList.spider.spider3.imgUrl} />
            </div>
            <div className="col-6 col-lg-4 col-xxl-2">
              <Buddi imgUrl={BuddiesList.armadillo.armadillo1.imgUrl} />
            </div>
            <div className="col-6 col-lg-4 col-xxl-2">
              <Buddi imgUrl={BuddiesList.whale.whale3.imgUrl} />
            </div>
            <div className="col-6 col-lg-4 col-xxl-2">
              <Buddi imgUrl={BuddiesList.crocodile.crocodile3.imgUrl} />
            </div>
            <div className="col-6 col-lg-4 col-xxl-2">
              <Buddi imgUrl={BuddiesList.sloth.sloth1.imgUrl} />
            </div>
            <div className="col-6 col-lg-4 offset-xxl-1 col-xxl-2">
              <Buddi imgUrl={BuddiesList.spider.spider1.imgUrl} />
            </div>
            <div className="col-6 col-lg-4 col-xxl-2">
              <Buddi imgUrl={BuddiesList.armadillo.armadillo3.imgUrl} />
            </div>
            <div className="col-6 col-lg-4 col-xxl-2">
              <Buddi imgUrl={BuddiesList.whale.whale2.imgUrl} />
            </div>
            <div className="col-6 col-lg-4 col-xxl-2">
              <Buddi imgUrl={BuddiesList.crocodile.crocodile2.imgUrl} />
            </div>
            <div className="col-6 col-lg-4 col-xxl-2">
              <Buddi imgUrl={BuddiesList.sloth.sloth2.imgUrl} />
            </div>
            <div className="col-6 col-lg-4 offset-xxl-1 col-xxl-2">
              <Buddi imgUrl={BuddiesList.spider.spider2.imgUrl} />
            </div>
            <div className="col-6 col-lg-4 col-xxl-2">
              <Buddi imgUrl={BuddiesList.armadillo.armadillo2.imgUrl} />
            </div>
            <div className="col-6 col-lg-4 col-xxl-2">
              <Buddi imgUrl={BuddiesList.whale.whale1.imgUrl} />
            </div>
            <div className="col-6 col-lg-4 col-xxl-2">
              <Buddi imgUrl={BuddiesList.crocodile.crocodile1.imgUrl} />
            </div>
            <div className="col-5 col-lg-4 col-xxl-2">
              <Buddi imgUrl={BuddiesList.sloth.sloth3.imgUrl} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
