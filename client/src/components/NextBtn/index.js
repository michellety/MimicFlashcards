import React from "react";
import "./style.css";

function NextBtn(props) {
  return (
    <button className="next-btn" onClick={props.onClick}>
      Next Card
    </button>
  );
}

export default NextBtn;

