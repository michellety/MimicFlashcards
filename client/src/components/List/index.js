import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}

/* <div className="d-flex align-items-start flex-column bd-highlight mb-3" style="height: 200px;">
  <div className="mb-auto p-2 bd-highlight">{children}</div>
  
</div>


<div class="d-flex flex-wrap">
  card
</div> */
