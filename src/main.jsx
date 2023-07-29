import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Login } from "./Login.jsx";
import { Password } from "./Password.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Login,
  },
  {
    path: "/password",
    Component: Password,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
