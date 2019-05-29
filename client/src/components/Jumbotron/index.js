import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return (
    <div
      style={{ minHeight: 455, clear: "both", paddingTop: 30, margin: 50, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
