import React from "react";
import "./style.css";

function DeleteBtn(props) {
  return (
    <span className="delete-btn" {...props} role="button">
      ✗
    </span>
  );
}

export default DeleteBtn;
