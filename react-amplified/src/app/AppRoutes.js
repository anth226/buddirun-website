import React from "react";
import { Routes, Route } from "react-router-dom";
import { APP_ROUTES } from "./routes";

const AppRoutes = () => {
  return (
    <Routes>
      {Object.entries(APP_ROUTES).map(([key, config]) => {
        const { path, Component } = config;
        return <Route key={key} path={path} element={<Component />} />;
      })}
      <Route
        path="/*"
        element={<h2 className="text-center p-t-4 ">404: Page Not found</h2>}
      />
    </Routes>
  );
};

export default AppRoutes;
