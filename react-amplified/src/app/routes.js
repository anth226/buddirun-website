import Demo from "../page/Demo";
import Home from "../page/Home";
import Mint from "../page/Mint";
import Profile from "../page/Profile";

export const APP_ROUTES = {
  Dashboard: {
    path: "/",
    Component: Home,
  },
  Demo: {
    path: "/demo",
    Component: Demo,
  },
  Mint: {
    path: "/mint",
    Component: Mint,
  },
  Profile: {
    path: "/profile",
    Component: Profile,
  },
};
