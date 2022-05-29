import React from "react";
import Footer from "../modules/layout/FooterLayout";
import Header from "../modules/layout/HeaderLayout";

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
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.13169e-06 3C2.13169e-06 2.20435 0.316073 1.44129 0.878682 0.87868C1.44129 0.316071 2.20435 0 3 0H19.75C20.612 0 21.4386 0.34241 22.0481 0.951903C22.6576 1.5614 23 2.38805 23 3.25V4.256C24.748 4.874 26 6.541 26 8.5V21.5C26 22.6935 25.5259 23.8381 24.682 24.682C23.8381 25.5259 22.6935 26 21.5 26H4.5C3.30653 26 2.16194 25.5259 1.31802 24.682C0.474108 23.8381 2.13169e-06 22.6935 2.13169e-06 21.5V3.25H0.0100021C0.00323947 3.16684 -9.66756e-05 3.08344 2.13169e-06 3ZM21 3.25C21 2.56 20.44 2 19.75 2H3C2.73479 2 2.48043 2.10536 2.2929 2.29289C2.10536 2.48043 2 2.73478 2 3C2 3.26522 2.10536 3.51957 2.2929 3.70711C2.48043 3.89464 2.73479 4 3 4H21V3.25ZM18 15C17.7348 15 17.4804 15.1054 17.2929 15.2929C17.1054 15.4804 17 15.7348 17 16C17 16.2652 17.1054 16.5196 17.2929 16.7071C17.4804 16.8946 17.7348 17 18 17H21C21.2652 17 21.5196 16.8946 21.7071 16.7071C21.8946 16.5196 22 16.2652 22 16C22 15.7348 21.8946 15.4804 21.7071 15.2929C21.5196 15.1054 21.2652 15 21 15H18Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <span>{address}</span>
                <div
                  className="clipboard ms-auto"
                  onClick={() => {
                    navigator.clipboard.writeText(address);
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 4V16C8 16.5304 8.21071 17.0391 8.58579 17.4142C8.96086 17.7893 9.46957 18 10 18H18C18.5304 18 19.0391 17.7893 19.4142 17.4142C19.7893 17.0391 20 16.5304 20 16V7.242C20 6.97556 19.9467 6.71181 19.8433 6.46624C19.7399 6.22068 19.5885 5.99824 19.398 5.812L16.083 2.57C15.7094 2.20466 15.2076 2.00007 14.685 2H10C9.46957 2 8.96086 2.21071 8.58579 2.58579C8.21071 2.96086 8 3.46957 8 4V4Z"
                      stroke="#BBBBBB"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 18V20C16 20.5304 15.7893 21.0391 15.4142 21.4142C15.0391 21.7893 14.5304 22 14 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V9C4 8.46957 4.21071 7.96086 4.58579 7.58579C4.96086 7.21071 5.46957 7 6 7H8"
                      stroke="#BBBBBB"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
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
