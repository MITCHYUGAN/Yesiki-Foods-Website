import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/css/global.css";
import { Root } from "./Root.jsx";
import App from "./App.jsx";
import Menu from "./pages/Menu.jsx";
import { createBrowserRouter } from "react-router";

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
    <Root router={router} />
  </React.StrictMode>,
);
