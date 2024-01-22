import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";

const routes = [{ path: "/", component: HomePage }];
function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((c) => (
          <Route path={c.path} element={<c.component />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default MainRoutes;
