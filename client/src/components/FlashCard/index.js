import React from "react";
import "./style.css";

const FlashCard = (props) => {
  return (
    <div className="container">
      <div className="cardBody">
        <div className="front">
          <div className="word">{props.word}</div>
        </div>
        <div className="back">
          <div className="translated">{props.translated}</div>
        </div>
      </div>
    </div>

  );
}

export default FlashCard;
