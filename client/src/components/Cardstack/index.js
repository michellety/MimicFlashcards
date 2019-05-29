import React from "react";
import "./style.css";

// This file exports the grid area into which the new cards created are added

export function GridArea({ children }) {
  return (
    <div className="grid-area">{children}</div>
  );
}

export function GridItem({ children }) {
  return <div className="cardstack-item">{children}</div>;
}


