import React from "react";
import ReactDOM from "react-dom/client";
import './index.scss';
import App from "./App";
import OTPComp from "./OTP";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <OTPComp />
  </React.StrictMode>
);