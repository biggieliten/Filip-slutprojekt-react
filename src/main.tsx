import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./Routes/HomePage";
import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
