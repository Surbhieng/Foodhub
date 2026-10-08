import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import StoreContextProvider from "./context/StoreContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StoreContextProvider>
    <>
      <App />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  </StoreContextProvider>
);