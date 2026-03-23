import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./Styles/css/global.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import Menu from "./pages/Menu.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
