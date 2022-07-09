import React, { useState, useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { APP_ROUTES } from "../../app/routes";
import LoginForm from "../auth/LoginForm";
import RecoverPasswordForm from "../auth/RecoverPasswordForm";
import RegisterForm from "../auth/RegisterForm";
import CognitoAuthForm from "../auth/CognitoForm";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { DatastoreStatus, useDatastoreContext } from "../../lib/contextLib";
import AppUser from "../../appModels/AppUser";
import { getAvatar } from "../../assets/utils";

export default function Header() {
  const active = window.location.pathname;
  const [open, setOpen] = useState(false);
  const [openAuth, setOpenAuth] = useState(false);
  const [hasLogin] = React.useState(false);
  const [formType, setFormType] = React.useState("");
  const [userFullName, setUserFullName] = React.useState("");
  const datastoreStatus = useDatastoreContext();

  let location = useLocation();

  const { user, signOut } = useAuthenticator((context) => [context.user]);

  const closeNavbar = (navbarID) => {
    const navbar = document.getElementById(navbarID);
    if (navbar.className.indexOf("show") >= 0) {
      new bootstrap.Collapse(navbar, {
        hide: true,
      });
    }
  };

  const handleOpen = () => {
    if (!open) {
      const p = document.createElement("div");
      p.className = "filter-backdrop";
      p.id = "filter-backdrop";
      document.body.appendChild(p);
    } else {
      const p = document.getElementById("filter-backdrop");
      p?.parentNode?.removeChild(p);
      closeNavbar("navbarList");
    }

    setOpen(!open);
  };

  const handleOpenAuth = () => {
    console.log("OPENING AUTH", openAuth);
    if (!openAuth) {
      const backdrop = document.getElementById("filter-backdrop");
      if (!backdrop) {
        const p = document.createElement("div");
        p.className = "filter-backdrop";
        p.id = "filter-backdrop";
        document.body.appendChild(p);
      }
    } else {
      const p = document.getElementById("filter-backdrop");
      console.log("TEST BACKDROP", p);
      p?.parentNode?.removeChild(p);
      setFormType("");
      closeNavbar("navbarAuth");
    }

    setOpenAuth(!openAuth);
  };

  const handleClose = () => {
    if (open) {
      const p = document.getElementById("filter-backdrop");
      p?.parentNode?.removeChild(p);
      setOpen(false);
    }
    closeNavbar("navbarList");
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
        return (
          <CognitoAuthForm formType={formType} setFormType={setFormType} />
        );
    }
  };

  // On render
  useEffect(() => {
    console.log("LOAD HEADER LAYOUT", datastoreStatus);
    console.log("TEST LOCATION", location);
    const requireAuth = location.state ? location.state.requireAuth : false;
    if (requireAuth) {
      handleOpenAuth();
    }
    if (datastoreStatus === DatastoreStatus.LOGGED_IN) {
      const appUserModel = AppUser.getInstance();
      appUserModel
        .getOrCreateUser()
        .then((appUser) => {
          console.log("GOT USER in HEADER LAYOUT", appUser);
          if (!appUser.first_name || !appUser.last_name) {
            setUserFullName(appUser.email);
          } else {
            setUserFullName(
              `${appUser.first_name || ""} ${appUser.last_name || ""}`
            );
          }
          // TODO:  Hackish ~ If auth authNavbar is opened after login, close it.
          //        Unfortunately, if the authNavbar is intentionally opened while this component renders,
          //        it will force the close which may not be the desired behaviour.
          if (openAuth) {
            handleOpenAuth();
          }
        })
        .catch((err) => {
          console.warn(err);
        });
    }
  }, [datastoreStatus, setUserFullName]);

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid nav-container">
          <a className="navbar-brand" href="/">
            <img src="img/top nav.png" alt="ocmp.svg" className="img-fluid" />
          </a>
          <div className="collapse navbar-collapse" id="navbarList">
            {user && (
              <div className="modal-profile text-center d-sm-block d-sm-none">
                <div className="avatar">
                  <img
                    src={`img/avatars/${
                      getAvatar(user?.attributes?.email) || 0
                    }.png`}
                  />
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
            {/* TODO: navbar-nav needs to be reworked with flex instead of col */}
            <ul className="navbar-nav me-auto navbar-list">
              <li className="nav-item col-lg-3 h-100 p-0">
                <Link
                  to="/"
                  className={`nav-link h-100 d-flex align-items-center justify-content-center${
                    active === "/" ? " active" : ""
                  }`}
                  aria-current="page"
                  onClick={() => {
                    active !== "/" && handleClose();
                  }}
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item col-lg-3 h-100 p-0">
                <Link
                  to={APP_ROUTES.Race.path}
                  className={`nav-link h-100 d-flex align-items-center justify-content-center${
                    active === APP_ROUTES.Race.path ? " active" : ""
                  }`}
                  onClick={() => {
                    active !== APP_ROUTES.Race.path && handleClose();
                  }}
                >
                  RACE
                </Link>
              </li>
              <li className="nav-item col-lg-3 h-100 p-0 position-relative">
                <div className="d-none d-lg-block h-100">
                  <a
                    href="/documents"
                    id="docsDropdown"
                    className={`nav-link dropdown-toggle h-100 d-flex align-items-center justify-content-center`}
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
                      <a
                        href="https://basha-games.gitbook.io/buddi-run-whitepaper/"
                        className="dropdown-item d-flex"
                      >
                        <span>Whitepaper</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="dropdown-item d-flex"
                        disabled="disabled"
                      >
                        <span>Pitch Deck</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="d-block d-lg-none h-100">
                  <span className="nav-link h-100 d-flex align-items-center justify-content-center opacity-50">
                    DOCS
                  </span>
                  <ul className="w-100 list-unstyled">
                    <li className="mt-2">
                      <a
                        href="https://basha-games.gitbook.io/buddi-run-whitepaper/"
                        className="nav-link docs-item"
                      >
                        <span>Whitepaper</span>
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="nav-link docs-item"
                        disabled="disabled"
                      >
                        <span>Pitch Deck</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              {/*<li className="nav-item col-lg-2 h-100 p-0">
                <Link
                  to="/mint"
                  className={`nav-link h-100 d-flex align-items-center justify-content-center${
                    active === "/mint" ? " active" : ""
                  }`}
                  onClick={() => {
                    active !== APP_ROUTES.Mint.path && handleClose();
                  }}
                >
                  MINT
                </Link>
              </li>
              */}
              <li className="nav-item col-lg-3 h-100 p-0 position-relative">
                <div className="d-none d-lg-block h-100">
                  <a
                    href="/more"
                    id="moreDropdown"
                    className={`nav-link dropdown-toggle h-100 d-flex align-items-center justify-content-center`}
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    MORE
                  </a>
                  <ul
                    className="dropdown-menu w-100 mt-2"
                    aria-labelledby="moreDropdown"
                  >
                    <li>
                      <Link to="/team" className="dropdown-item d-flex">
                        <span>Team</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/faq"
                        className="dropdown-item d-flex"
                        disabled="disabled"
                      >
                        <span>FAQ</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="d-block d-lg-none h-100">
                  <span className="nav-link h-100 d-flex align-items-center justify-content-center opacity-50">
                    MORE
                  </span>
                  <ul className="w-100 list-unstyled">
                    <li className="mt-2">
                      <Link
                        to="/team"
                        className={`nav-link docs-item${
                          active === APP_ROUTES.Team.path ? " active" : ""
                        }`}
                        onClick={() => {
                          active !== APP_ROUTES.Team.path && handleClose();
                        }}
                      >
                        <span>Team</span>
                      </Link>
                    </li>
                    <li className="mt-2">
                      <Link
                        to="/faq"
                        className={
                          `nav-link docs-item` /* TODO: Add active class if route is current & add onClick handler */
                        }
                        disabled="disabled"
                      >
                        <span>FAQ</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              {!user ? (
                <button
                  className={`btn-signin btn collapsed`}
                  type="button"
                  onClick={() => handleOpenAuth()}
                  disabled={datastoreStatus < DatastoreStatus.INIT}
                >
                  LOG IN
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
                    <img
                      src={`img/avatars/${
                        getAvatar(user?.attributes?.email) || 0
                      }.png`}
                    />
                  </li>
                </ul>
              )}
            </li>
          </ul>
          <button
            className={`navbar-toggler${open ? " close-toggle" : ""} collapsed`}
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
        className={`collapse navbar-collapse navbarAuth${
          openAuth ? " show" : ""
        }`}
        id="navbarAuth"
      >
        <button
          className={`navbar-toggler close-auth-toggle${
            openAuth ? " active" : ""
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
        {handleFormType()}
      </div>
    </header>
  );
}
