import React from "react";
import ReactDOM from "react-dom";
import HotelList from "./components/HotelList";

ReactDOM.render(
  <React.StrictMode>
    <HotelList title="Micro Frontend 1" color="#ffdd57" mode="Standalone" />
  </React.StrictMode>,
  document.getElementById("root")
);
