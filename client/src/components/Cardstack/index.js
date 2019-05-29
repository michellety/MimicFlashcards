import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function GridArea({ children }) {
  return (
    <div className="grid-area">{children}</div>
  );
}

export function GridItem({ children }) {
  return <div className="cardstack-item">{children}</div>;
}


