import React, { Component } from "react";
import "./style.css";

class NextBtn extends Component {
  state = {
    cards: [],
    word: "",
    translated: "",
    currentCard: {}

  };

  nextCard() {
    this.props.nextCard();
  }

  render(props) {

    return (
      <div className="container">
        <button className="nextbtn" onClick={this.nextCard}>Next Card</button>
      </div>
    );
  }
}

export default NextBtn;
