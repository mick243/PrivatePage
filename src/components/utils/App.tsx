import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "../layouts/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../layouts/Main";
import About from "../layouts/About";

const routeList = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/About",
    element: <About />,
  },
];

const router = createBrowserRouter(
  routeList.map((item) => {
    if (item.path === "/") return item;
    return {
      ...item,
      element: <Layout>{item.element}</Layout>,
    };
  })
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
