import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="row container-fluid footer-wrap">
        <div className="col-12 col-lg-5 info">
          <div>
            <img src="img/Layer 2.png" />
          </div>
          <span>© 2022 Buddy RUN. All rights reserved</span>
        </div>
        <div className="col-12 col-lg-7 link">
          <div className="row">
            <div className="col-6 col-sm-3">
              <h4>Product</h4>
              <h5>Overview</h5>
              <h5>Features</h5>
              <h5>Tutorials</h5>
              <h5>Pricing</h5>
              <h5>Releases</h5>
            </div>
            <div className="col-6 col-sm-3">
              <h4>Company</h4>
              <h5>About</h5>
              <h5>Press</h5>
              <h5>Careers</h5>
              <h5>Contact</h5>
              <h5>Partners</h5>
            </div>
            <div className="col-6 col-sm-3">
              <h4>Support</h4>
              <h5>Help Center</h5>
              <h5>Terms of Service</h5>
              <h5>Legal</h5>
              <h5>Privacy Policy</h5>
              <h5>Status</h5>
            </div>
            <div className="col-6 col-sm-3">
              <h4>Follow us</h4>
              <h5>Discord</h5>
              <h5>Twitter</h5>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
