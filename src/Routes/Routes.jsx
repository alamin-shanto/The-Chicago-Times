import React from "react";
import { createBrowserRouter } from "react-router";
import HomeLayout from "./../Layouts/HomeLayout";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "/auth",
    element: <h2>Authentication Layout</h2>,
  },
  {
    path: "/News",
    element: <h2>News Layout</h2>,
  },
  {
    path: "/*",
    element: <h2>Error 404</h2>,
  },
]);

export default Routes;
