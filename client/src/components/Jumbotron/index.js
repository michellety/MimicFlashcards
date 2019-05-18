import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 500, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron bg-image"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
