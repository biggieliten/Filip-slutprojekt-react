import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./Routes/HomePage";
import { SearchResult } from "./Routes/SearchResult";

import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <div>Error 404 not found</div>,
    children: [],
  },
  {
    path: "/search-result/:query",
    element: <SearchResult />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
