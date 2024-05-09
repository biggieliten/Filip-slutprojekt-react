import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./Routes/HomePage/HomePage";
import { SearchResult } from "./Routes/SearchResult/SearchResult";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.scss";
import { FavoriteAuthors } from "./Routes/FavoriteAuthors/FavoriteAuthors";
import { FavoriteBooks } from "./Routes/FavoriteBooks/FavoriteBooks";
import { ReadBooks } from "./Routes/ReadBooks/ReadBooks";
import { BookProvider } from "./State/Books/BookContextProvider";
import { ReviewForm } from "./Routes/ReviewForm/ReviewForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <div>Error 404 not found</div>,
    children: [
      {
        path: "search-result/:query",
        element: <SearchResult />,
      },
      {
        path: "read-books",
        element: <ReadBooks />,
        children: [
          {
            path: "review/:key",
            element: <ReviewForm />,
          },
        ],
      },
      {
        path: "favorite-authors",
        element: <FavoriteAuthors />,
      },
      {
        path: "favorite-books",
        element: <FavoriteBooks />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BookProvider>
      <RouterProvider router={router} />
    </BookProvider>
  </React.StrictMode>
);
