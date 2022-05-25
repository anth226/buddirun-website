import React from "react";
import Footer from "../modules/Layout/FooterLayout";
import Header from "../modules/Layout/HeaderLayout";

export default function Mint() {
  const [address] = React.useState("0x245v...984tb9adv");
  return (
    <div>
      <section className="mint">
        <div className="container-fluid">
          <Header />
          <div className="wrap">
            <h1>MINT</h1>
          </div>
        </div>
      </section>
      <section className="select-to-mint">
        <div className="wrap position-relative">
          <div className="heading-wrap text-center">
            <hr />
            <h3>SELECT A TYPE OF BUDDI TO MINT</h3>
            <hr />
          </div>
          <div className="content">
            <div className="d-flex flex-row flex-wrap justify-content-center">
              <div className="box">
                <div className="model">
                  <img src="img/Asset 2.png" />
                </div>
                <div className="heading">
                  <h4>Spider</h4>
                </div>
                <div className="row count">
                  <div className="col-3 col-md-4 btn-sub">-</div>
                  <div className="col-6 col-md-4 number">1</div>
                  <div className="col-3 col-md-4 btn-add">+</div>
                </div>
              </div>
              <div className="box">
                <div className="model">
                  <img src="img/Asset 3.png" />
                </div>
                <div className="heading">
                  <h4>Armadillo</h4>
                </div>
                <div className="row count">
                  <div className="col-3 col-md-4 btn-sub">-</div>
                  <div className="col-6 col-md-4 number">1</div>
                  <div className="col-3 col-md-4 btn-add">+</div>
                </div>
              </div>
              <div className="box">
                <div className="model">
                  <img src="img/Asset 1.png" />
                </div>
                <div className="heading">
                  <h4>Whale</h4>
                </div>
                <div className="row count">
                  <div className="col-3 col-md-4 btn-sub">-</div>
                  <div className="col-6 col-md-4 number">1</div>
                  <div className="col-3 col-md-4 btn-add">+</div>
                </div>
              </div>
              <div className="box">
                <div className="model">
                  <img src="img/Asset 5.png" />
                </div>
                <div className="heading">
                  <h4>Crocodile</h4>
                </div>
                <div className="row count">
                  <div className="col-3 col-md-4 btn-sub">-</div>
                  <div className="col-6 col-md-4 number">1</div>
                  <div className="col-3 col-md-4 btn-add">+</div>
                </div>
              </div>
              <div className="box">
                <div className="model">
                  <img src="img/furboy_item_31_32_quarter 1.png" />
                </div>
                <div className="heading">
                  <h4>Sloth</h4>
                </div>
                <div className="row count">
                  <div className="col-3 col-md-4 btn-sub">-</div>
                  <div className="col-6 col-md-4 number">1</div>
                  <div className="col-3 col-md-4 btn-add">+</div>
                </div>
              </div>
            </div>
            <div className="total ms-auto container-fluid">
              Total "Buddis": <span>005</span>
            </div>
          </div>
        </div>
      </section>
      <section className="wallet">
        <div className="wrap position-relative container-fluid">
          <div className="heading-wrap text-center">
            <hr />
            <h3>WALLET</h3>
            <hr />
          </div>
          <div className="content text-center">
            <div className="box">
              <div className="d-flex flex-row">
                <div className="status">
                  <div className="connected"></div>
                  <h5>Connected</h5>
                </div>
                <div className="ms-auto">
                  <button className="btn-disconnect">Disconnect</button>
                </div>
              </div>
              <div className="d-flex flex-row align-items-center wallet-info">
                <div className="wallet-logo">
                  <img src="img/Wallet.png" />
                </div>
                <span>{address}</span>
                <div
                  className="clipboard ms-auto"
                  onClick={() => {
                    navigator.clipboard.writeText(address);
                  }}
                >
                  <img src="img/akar-icons_copy.png" />
                </div>
              </div>
            </div>
            <button className="btn-mint">MINT</button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
