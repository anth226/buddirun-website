import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useAuthenticator } from '@aws-amplify/ui-react';
import { AmplifyContext } from "../../contexts";
import { DatastoreStatus } from "../../contexts/amplify/AmplifyContext";
import { APP_ROUTES } from "../../app/routes";
import LoginForm from "../auth/LoginForm";
import RecoverPasswordForm from "../auth/RecoverPasswordForm";
import RegisterForm from "../auth/RegisterForm";
import CognitoAuthForm from "../auth/CognitoForm";

export default function Header() {
  const active = window.location.pathname;
  const [open, setOpen] = useState(false);
  const [openAuth, setOpenAuth] = useState(false);
  const [hasLogin] = React.useState(false);
  const [formType, setFormType] = React.useState("");
  const { datastoreStatus } = useContext(AmplifyContext);

  const { user, signOut } = useAuthenticator((context) => [context.user]);

  const closeNavbar = (navbarID) => {
    const navbar = document.getElementById(navbarID);
    if (navbar.className.indexOf('show') >= 0) {
      new bootstrap.Collapse(navbar, {
        hide: true
      });
    }
  }

  const handleOpen = () => {
    if (!open) {
      const p = document.createElement("div");
      p.className = "filter-backdrop";
      p.id = "filter-backdrop";
      document.body.appendChild(p);
    } else {
      const p = document.getElementById("filter-backdrop");
      p?.parentNode?.removeChild(p);
      closeNavbar('navbarList');
    }

    setOpen(!open);
  };

  const handleOpenAuth = () => {
    console.log('OPENING AUTH', openAuth);
    if (!openAuth) {
      const p = document.createElement("div");
      p.className = "filter-backdrop";
      p.id = "filter-backdrop";
      document.body.appendChild(p);
    } else {
      const p = document.getElementById("filter-backdrop");
      p?.parentNode?.removeChild(p);
      setFormType("");
      closeNavbar('navbarAuth');
    }

    setOpenAuth(!openAuth);
  };

  const handleClose = () => {
    if (open) {
      const p = document.getElementById("filter-backdrop");
      p?.parentNode?.removeChild(p);
      setOpen(false);
    }
    closeNavbar('navbarList');
  };

  const handleFormType = () => {
    switch (formType) {
      // case "register":
      //   return <RegisterForm />;
      // case "recover":
      //   return <RecoverPasswordForm />;
      // default:
      //   return <LoginForm setFormType={setFormType} />;
      default:
        return <CognitoAuthForm formType={formType} setFormType={setFormType} />
    }
  };

  // On render
  let userFullName = '';
  if (user) {
    userFullName = `${user.attributes.given_name} ${user.attributes.family_name}`;
    // TODO:  Hackish ~ If auth authNavbar is opened after login, close it.
    //        Unfortunately, if the authNavbar is intentionally opened while this component renders,
    //        it will force the close which may not be the desired behaviour.
    if (openAuth) {
      handleOpenAuth();
    }
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="img/top nav.png" alt="ocmp.svg" className="img-fluid" />
          </a>
          <div className="collapse navbar-collapse" id="navbarList">
            {user && (
              <div className="modal-profile text-center d-sm-block d-sm-none">
                <div className="avatar">
                  <img src="img/Avatar.png" />
                </div>
                <div className="name">{userFullName}</div>
                <div className="row">
                  <div className="col-6">
                    <Link
                      to={APP_ROUTES.Profile.path}
                      className="d-flex"
                      onClick={() => {
                        active !== APP_ROUTES.Profile.path && handleClose();
                      }}
                    >
                      <img src="img/ant-design_user-outlined.svg" />
                      <span>Profile</span>
                    </Link>
                  </div>
                  <div className="col-6">
                    <Link
                      to=""
                      className="d-flex"
                      onClick={() => {
                        active != "/logout" && signOut() && handleClose();
                      }}
                    >
                      <img src="img/mdi_exit-to-app.svg" />
                      <span>Sign Out</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
            <ul className="navbar-nav me-auto navbar-list row">
              <li className="nav-item col-lg-3 h-100 p-0">
                <Link
                  to="/about"
                  className={`nav-link h-100 d-flex align-items-center justify-content-center  ${
                    active === "/about" && "active"
                  }`}
                  aria-current="page"
                  onClick={() => {
                    active !== "/page" && handleClose();
                  }}
                >
                  ABOUT
                </Link>
              </li>
              <li className="nav-item col-lg-3 h-100 p-0 position-relative">
                <div className="d-none d-lg-block h-100">
                  <a
                    href="/documents"
                    id="docsDropdown"
                    className={`nav-link dropdown-toggle h-100 d-flex align-items-center justify-content-center ${
                      active === "/documents" && "active"
                    }`}
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    DOCS
                  </a>
                  <ul
                    className="dropdown-menu w-100 mt-2"
                    aria-labelledby="docsDropdown"
                  >
                    <li>
                      <Link to="/whitepaper" className="dropdown-item d-flex">
                        <span>Whitepaper</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/pitch-deck" className="dropdown-item d-flex">
                        <span>Pitch Deck</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="d-block d-lg-none h-100">
                  <a
                    href="/documents"
                    className="nav-link h-100 d-flex align-items-center justify-content-center opacity-50"
                  >
                    DOCS
                  </a>
                  <ul className="w-100 list-unstyled">
                    <li className="mt-2">
                      <Link to="/whitepaper" className="docs-item">
                        <span>Whitepaper</span>
                      </Link>
                    </li>
                    <li className="mt-2">
                      <Link to="/pitch-deck" className="docs-item">
                        <span>Pitch Deck</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item col-lg-3 h-100 p-0">
                <Link
                  to={APP_ROUTES.Demo.path}
                  className={`nav-link h-100 d-flex align-items-center justify-content-center ${
                    active === "/demo" && "active"
                  }`}
                  onClick={() => {
                    active !== "/demo" && handleClose();
                  }}
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
                  onClick={() => {
                    active !== "/mint" && handleClose();
                  }}
                >
                  MINT
                </Link>
              </li>
            </ul>
          </div>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                href="https://discord.gg/U4tsfjvcWP"
                target="_blank"
                className="nav-logo d-flex align-items-center justify-content-center"
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 68 68"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_419_772)">
                    <path
                      d="M57.2874 12.6358C52.9307 10.6362 48.333 9.21028 43.6094 8.39384C43.5663 8.38544 43.5217 8.39096 43.4819 8.40958C43.4421 8.42819 43.4093 8.45896 43.3882 8.49744C42.8002 9.54744 42.145 10.9166 41.6858 11.9974C36.5938 11.224 31.4142 11.224 26.3222 11.9974C25.8111 10.7999 25.2344 9.63144 24.5946 8.49744C24.5725 8.45982 24.5396 8.42979 24.5001 8.41129C24.4606 8.39279 24.4164 8.38671 24.3734 8.39384C19.6494 9.20858 15.0514 10.6346 10.6954 12.6358C10.6585 12.6513 10.6272 12.6777 10.6058 12.7114C1.89218 25.7286 -0.496217 38.4238 0.676983 50.9594C0.679833 50.9905 0.689001 51.0207 0.703926 51.0482C0.718851 51.0756 0.739219 51.0997 0.763783 51.119C5.83625 54.8772 11.5105 57.746 17.5442 59.603C17.5867 59.6153 17.632 59.6144 17.674 59.6004C17.716 59.5864 17.7527 59.56 17.7794 59.5246C19.0765 57.762 20.2248 55.8945 21.2122 53.9414C21.226 53.9147 21.2339 53.8854 21.2355 53.8553C21.2371 53.8253 21.2323 53.7953 21.2215 53.7672C21.2106 53.7392 21.194 53.7138 21.1726 53.6926C21.1512 53.6715 21.1256 53.6551 21.0974 53.6446C19.287 52.9518 17.5343 52.1167 15.8558 51.147C15.825 51.1292 15.7991 51.1041 15.7804 51.0739C15.7617 51.0437 15.7507 51.0093 15.7485 50.9738C15.7463 50.9384 15.7529 50.9029 15.7677 50.8706C15.7825 50.8383 15.8051 50.8101 15.8334 50.7886C16.1869 50.5242 16.5341 50.2516 16.875 49.971C16.9048 49.9469 16.9407 49.9314 16.9788 49.9265C17.0169 49.9215 17.0556 49.9273 17.0906 49.943C28.089 54.9634 39.9946 54.9634 50.8642 49.943C50.8995 49.9267 50.9388 49.9207 50.9774 49.9256C51.016 49.9306 51.0525 49.9463 51.0826 49.971C51.4186 50.2454 51.7714 50.5254 52.127 50.7886C52.155 50.8098 52.1774 50.8374 52.1923 50.8692C52.2072 50.9009 52.2141 50.9358 52.2124 50.9709C52.2108 51.0059 52.2006 51.04 52.1828 51.0702C52.165 51.1004 52.14 51.1258 52.1102 51.1442C50.4355 52.123 48.6811 52.9585 46.8658 53.6418C46.8375 53.6527 46.8119 53.6693 46.7905 53.6907C46.7691 53.7121 46.7524 53.7378 46.7416 53.766C46.7307 53.7943 46.726 53.8245 46.7276 53.8547C46.7292 53.885 46.7372 53.9145 46.751 53.9414C47.759 55.8958 48.9126 57.755 50.181 59.5218C50.2071 59.5578 50.2438 59.5848 50.286 59.5988C50.3282 59.6129 50.3737 59.6134 50.4162 59.6002C56.46 57.749 62.1434 54.8798 67.2218 51.1162C67.2465 51.0987 67.2673 51.0762 67.2827 51.0502C67.2981 51.0241 67.3079 50.9951 67.3114 50.965C68.7114 36.4694 64.965 23.8778 57.3742 12.717C57.3564 12.6794 57.3256 12.6495 57.2874 12.633V12.6358ZM22.8558 43.3238C19.5434 43.3238 16.8162 40.2858 16.8162 36.5506C16.8162 32.8182 19.493 29.7774 22.8558 29.7774C26.2438 29.7774 28.9486 32.8462 28.8954 36.5534C28.8954 40.2858 26.2186 43.3238 22.8558 43.3238V43.3238ZM45.1858 43.3238C41.8734 43.3238 39.1462 40.2858 39.1462 36.5506C39.1462 32.8182 41.8202 29.7774 45.1858 29.7774C48.5738 29.7774 51.2786 32.8462 51.2254 36.5534C51.2254 40.2858 48.5766 43.3238 45.1858 43.3238V43.3238Z"
                      fill="url(#paint0_linear_419_772)"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_419_772"
                      x1="33.9994"
                      y1="8.39001"
                      x2="33.9994"
                      y2="59.6117"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#D1D3E9" />
                      <stop offset="1" stopColor="#D9DCED" />
                    </linearGradient>
                    <clipPath id="clip0_419_772">
                      <rect
                        width="67.2"
                        height="67.2"
                        fill="white"
                        transform="translate(0.399902 0.400024)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://twitter.com/BuddiRun"
                target="_blank"
                className="nav-logo d-flex align-items-center justify-content-center"
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 68 68"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M66.6002 14.2233C64.2622 15.2593 61.7506 15.9593 59.1102 16.2757C61.8346 14.6455 63.8729 12.0798 64.8446 9.0573C62.285 10.5777 59.4836 11.6478 56.5622 12.2213C54.5977 10.1237 51.9956 8.73342 49.1599 8.26623C46.3243 7.79904 43.4137 8.28112 40.8801 9.63761C38.3465 10.9941 36.3316 13.1491 35.1483 15.7681C33.9649 18.387 33.6793 21.3234 34.3358 24.1213C29.1494 23.8609 24.0756 22.5128 19.4438 20.1646C14.8121 17.8164 10.7258 14.5206 7.45024 10.4909C6.33024 12.4229 5.68624 14.6629 5.68624 17.0485C5.68499 19.1961 6.21385 21.3108 7.2259 23.205C8.23795 25.0991 9.70189 26.7142 11.4878 27.9069C9.41661 27.841 7.39108 27.2813 5.57984 26.2745V26.4425C5.57963 29.4546 6.62153 32.374 8.52875 34.7053C10.436 37.0366 13.091 38.6363 16.0434 39.2329C14.122 39.7529 12.1076 39.8295 10.1522 39.4569C10.9852 42.0486 12.6078 44.315 14.7929 45.9387C16.9779 47.5624 19.616 48.4622 22.3378 48.5121C17.7174 52.1393 12.0111 54.1068 6.13704 54.0981C5.0965 54.0984 4.05685 54.0376 3.02344 53.9161C8.98597 57.7498 15.9268 59.7844 23.0154 59.7765C47.0114 59.7765 60.1294 39.9021 60.1294 22.6653C60.1294 22.1053 60.1154 21.5397 60.0902 20.9797C62.6419 19.1344 64.8444 16.8494 66.5946 14.2317L66.6002 14.2233Z"
                    fill="url(#paint0_linear_419_776)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_419_776"
                      x1="34.8118"
                      y1="8.09265"
                      x2="34.8118"
                      y2="59.7765"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#D1D3E9" />
                      <stop offset="1" stopColor="#D9DCED" />
                    </linearGradient>
                  </defs>
                </svg>
              </a>
            </li>
            <li className="nav-item">
              {!user ? (
                <button
                  className={`btn-signin btn collapsed`}
                  type="button"
                  onClick={() => handleOpenAuth()}
                  disabled={datastoreStatus < DatastoreStatus.READY}
                >
                  SIGN IN
                </button>
              ) : (
                <ul className="navbar-nav ms-auto nav-profile d-none d-sm-flex">
                  <li className="nav-item dropdown align-self-center">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {userFullName}
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link
                          to={APP_ROUTES.Profile.path}
                          className="dropdown-item d-flex"
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M20.1212 17.8969C19.679 16.8496 19.0374 15.8984 18.2321 15.0961C17.4292 14.2915 16.4781 13.65 15.4313 13.207C15.4219 13.2023 15.4126 13.2 15.4032 13.1953C16.8633 12.1406 17.8126 10.4227 17.8126 8.48438C17.8126 5.27344 15.211 2.67188 12.0001 2.67188C8.78912 2.67188 6.18756 5.27344 6.18756 8.48438C6.18756 10.4227 7.13678 12.1406 8.59693 13.1977C8.58756 13.2023 8.57818 13.2047 8.56881 13.2094C7.51881 13.6523 6.57662 14.2875 5.76803 15.0984C4.96344 15.9013 4.32194 16.8524 3.87896 17.8992C3.44378 18.924 3.20908 20.0228 3.18756 21.1359C3.18693 21.161 3.19132 21.1858 3.20046 21.2091C3.20961 21.2324 3.22332 21.2537 3.24079 21.2716C3.25826 21.2895 3.27915 21.3037 3.30221 21.3134C3.32527 21.3231 3.35004 21.3281 3.37506 21.3281H4.78131C4.88443 21.3281 4.96647 21.2461 4.96881 21.1453C5.01568 19.3359 5.74225 17.6414 7.02662 16.357C8.35553 15.0281 10.1204 14.2969 12.0001 14.2969C13.8797 14.2969 15.6446 15.0281 16.9735 16.357C18.2579 17.6414 18.9844 19.3359 19.0313 21.1453C19.0337 21.2484 19.1157 21.3281 19.2188 21.3281H20.6251C20.6501 21.3281 20.6749 21.3231 20.6979 21.3134C20.721 21.3037 20.7419 21.2895 20.7593 21.2716C20.7768 21.2537 20.7905 21.2324 20.7997 21.2091C20.8088 21.1858 20.8132 21.161 20.8126 21.1359C20.7891 20.0156 20.5571 18.9258 20.1212 17.8969V17.8969ZM12.0001 12.5156C10.9243 12.5156 9.91178 12.0961 9.15006 11.3344C8.38834 10.5727 7.96881 9.56016 7.96881 8.48438C7.96881 7.40859 8.38834 6.39609 9.15006 5.63437C9.91178 4.87266 10.9243 4.45312 12.0001 4.45312C13.0758 4.45312 14.0883 4.87266 14.8501 5.63437C15.6118 6.39609 16.0313 7.40859 16.0313 8.48438C16.0313 9.56016 15.6118 10.5727 14.8501 11.3344C14.0883 12.0961 13.0758 12.5156 12.0001 12.5156Z"
                              fill="white"
                            />
                          </svg>
                          <span>Profile</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to=""
                          className="dropdown-item d-flex"
                          onClick={() => {
                            active != "/logout" && signOut() && handleClose();
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
                              d="M19 3H5C3.89 3 3 3.89 3 5V9H5V5H19V19H5V15H3V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3ZM10.08 15.58L11.5 17L16.5 12L11.5 7L10.08 8.41L12.67 11H3V13H12.67L10.08 15.58Z"
                              fill="white"
                            />
                          </svg>
                          <span>Sign Out</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item avatar">
                    <img src="img/Avatar.png" />
                  </li>
                </ul>
              )}
            </li>
          </ul>
          <button
            className={`navbar-toggler ${open && "close-toggle"} collapsed`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarList"
            aria-controls="navbarList"
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
      <div
        className={`collapse navbar-collapse navbarAuth ${
          openAuth ? "show" : ""
        }`}
        id="navbarAuth"
      >
        <button
          className={`navbar-toggle close-auth-toggle ${
            openAuth && "active"
          } collapsed`}
          type="button"
          onClick={() => handleOpenAuth()}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L13 13M25 25L13 13M13 13L25 1L1 25"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        { handleFormType() }
      </div>
    </header>
  );
}
