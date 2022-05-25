import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const active = window.location.pathname;
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (!open) {
      const p = document.createElement("div");
      p.className = "filter-backdrop";
      p.id = "filter-backdrop";
      document.body.appendChild(p);
    } else {
      const p = document.getElementById("filter-backdrop");
      p?.parentNode?.removeChild(p);

      setOpen(false);
    }

    setOpen(!open);
  };
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="img/top nav.png" alt="ocmp.svg" className="img-fluid" />
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto navbar-list row">
              <li className="nav-item col-lg-3 h-100 p-0">
                <Link
                  to="/about"
                  className={`nav-link h-100 d-flex align-items-center justify-content-center  ${
                    active === "/about" && "active"
                  }`}
                  aria-current="page"
                  onClick={() => handleOpen()}
                >
                  ABOUT
                </Link>
              </li>
              <li className="nav-item col-lg-3 h-100 p-0">
                <Link
                  to="/documents"
                  className={`nav-link h-100 d-flex align-items-center justify-content-center ${
                    active === "/documents" && "active"
                  }`}
                  onClick={() => handleOpen()}
                >
                  DOCUMENTS
                </Link>
              </li>
              <li className="nav-item col-lg-3 h-100 p-0">
                <Link
                  to="/demo"
                  className={`nav-link h-100 d-flex align-items-center justify-content-center ${
                    active === "/demo" && "active"
                  }`}
                  onClick={() => handleOpen()}
                >
                  DEMO
                </Link>
              </li>
              <li className="nav-item col-lg-3 h-100 p-0">
                <Link
                  to="/mint"
                  className={`nav-link h-100 d-flex align-items-center justify-content-center ${
                    active === "/mint" && "active"
                  }`}
                  onClick={() => handleOpen()}
                >
                  MINT
                </Link>
              </li>
            </ul>
          </div>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <div className="nav-logo d-flex align-items-center justify-content-center">
                <img
                  src="img/simple-icons_discord.png"
                  width="30px"
                  height="30px"
                />
              </div>
            </li>
            <li className="nav-item ">
              <div className="nav-logo d-flex align-items-center justify-content-center">
                <img
                  src="img/akar-icons_twitter-fill.png"
                  width="30px"
                  height="30px"
                />
              </div>
            </li>
            <li className="nav-item">
              <button type="button" className="btn-signin btn">
                SIGN IN
              </button>
            </li>
          </ul>
          <button
            className={`navbar-toggler ${open && "close-toggle"} collapsed`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => handleOpen()}
          >
            <svg
              width={32}
              height={32}
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="black"
            >
              <path
                d="M5 16H27"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 8H27"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 24H27"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
