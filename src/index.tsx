import React from "react";
import ReactDOM from "react-dom";
import MFEComponent from "./components/MFEComponent";

ReactDOM.render(
  <React.StrictMode>
    <MFEComponent title="Micro Frontend 1" color="#ffdd57" mode="Standalone" />
  </React.StrictMode>,
  document.getElementById("root")
);
