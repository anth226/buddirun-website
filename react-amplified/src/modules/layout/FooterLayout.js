import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="row container-fluid footer-wrap">
        <div className="col-12 col-sm-5 info">
          <div>
            <img src="img/Layer 2.png" />
          </div>
          <span>© 2022 Buddi RUN. All rights reserved</span>
        </div>
        <div className="col-12 col-sm-7 link">
          <div className="row">
            <div className="ms-auto col-6 col-xl-3">
              <h4>Legal</h4>
              <h5>Terms of Service</h5>
              <h5>Privacy Policy</h5>
            </div>
            <div className="col-6 col-xl-3">
              <h4>Follow us</h4>
              <a href="https://discord.gg/U4tsfjvcWP" target="_blank">
                <h5>Discord</h5>
              </a>
              <a href="https://twitter.com/BuddiRun" target="_blank">
                <h5>Twitter</h5>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
