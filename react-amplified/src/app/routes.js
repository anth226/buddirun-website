import Demo from "../page/Demo";
import Home from "../page/Home";
import Mint from "../page/Mint";

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
};
