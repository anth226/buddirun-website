import React from "react";
import Header from "../modules/Layout/HeaderLayout";

export default function Profile() {
  const [address] = React.useState("0x245v...984tb9adv");
  const [hasConnect, setHasConnect] = React.useState(true);

  return (
    <div className="profile">
      <div className="container-fluid">
        <Header />
        <div className="wrap mt-5">
          <div className="row">
            <div className="col-sm-6">
              <div className="box text-center d-flex flex-column align-items-center">
                <div className="avatar">
                  <img src="img/image 48.png" />
                </div>
                <div className="name">IVAN LIKEAB</div>
                <button className="btn btn-outline profile-btn mb-4">
                  Change pictuce
                </button>
                {hasConnect && (
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
                      className="clipboard"
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
                          stroke="#FFFFFF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16 18V20C16 20.5304 15.7893 21.0391 15.4142 21.4142C15.0391 21.7893 14.5304 22 14 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V9C4 8.46957 4.21071 7.96086 4.58579 7.58579C4.96086 7.21071 5.46957 7 6 7H8"
                          stroke="#FFFFFF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="status ms-auto">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L9 9M17 17L9 9M9 9L17 1L1 17"
                          stroke="#FF0000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                )}
                <button className="btn btn-outline profile-btn">Log out</button>
              </div>
            </div>
            <div className="col-sm-6 mt-3">
              <div className="content">
                <div className="inner">
                  {!hasConnect && (
                    <div>
                      <h5>
                        You have completed 1/4 steps for a complete profile
                      </h5>
                      <ul className="progressbar">
                        <li className="complete"></li>
                        <li className="complete"></li>
                        <li className="active"></li>
                        <li></li>
                      </ul>
                      <h5>
                        To be eligible for drops and save the energy cells you
                        win, you need to have a complete profile.
                      </h5>
                    </div>
                  )}
                  <div>
                    <div className="info d-flex flex-column mt-4">
                      <span className="key">Username</span>
                      <span className="para"> ivanlikeab</span>
                    </div>
                    <div className="info d-flex flex-column">
                      <span className="key">Email</span>
                      <span className="para"> ivanlikeab@gmail.com</span>
                    </div>
                    {hasConnect && (
                      <div className="recieve-update d-flex flex-row align-items-center">
                        <input type="checkbox" />
                        <h6>Receive drop updates & Marketing emails</h6>
                      </div>
                    )}
                  </div>
                </div>
                {!hasConnect ? (
                  <>
                    <button className="primary-btn">
                      Connect MetaMask Wallet
                    </button>
                    <button className="primary-btn">Connect Twitter</button>
                    <button className="primary-btn">Join BR Discord</button>
                  </>
                ) : (
                  <>
                    <div className="d-flex flex-row align-items-center mt-4 mb-3">
                      <div className="icon">
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
                      </div>
                      <h6 className="me-3">Connected</h6>
                      <div className="status">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1L9 9M17 17L9 9M9 9L17 1L1 17"
                            stroke="#FF0000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                      <div className="icon">
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
                      </div>
                      <h6 className="me-3">Connected</h6>
                      <div className="status">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1L9 9M17 17L9 9M9 9L17 1L1 17"
                            stroke="#FF0000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
