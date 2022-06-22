import Demo from "../page/Demo";
import Home from "../page/Home";
import Mint from "../page/Mint";
import Profile from "../page/Profile";
import Team from "../page/Team";

export const APP_ROUTES = {
  Dashboard: {
    path: "/",
    Component: Home,
  },
  Demo: {
    path: "/demo",
    devOnly: true,
    Component: Demo,
  },
  Mint: {
    path: "/mint",
    protectedRoute: true,
    Component: Mint,
  },
  Profile: {
    path: "/profile",
    protectedRoute: true,
    Component: Profile,
  },
  Team: {
    path: "/team",
    Component: Team,
  },
};
