import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import FlashCard from "../components/FlashCard";
// import NextBtn from "../components/NextBtn";

//as page loads
//get one object from the cards array
//render to page 
//then make next cards as a function as itself
//which will randomize and replace the current card

class Practice extends Component {
  state = {
    cards: [],
    word: "",
    translated: "",
    currentCard: {}
  };


  componentDidMount() {
    this.getCurrentCard();
  }

  getCurrentCard = () => {
    API.getCards()
      .then(res => {
        console.log(res.data);
        this.setState({ cards: res.data, word: "", translated: "", currentCard: this.getRandomCard(res.data) })
      }).catch(err => console.log(err));
  };

  // current = () => {
  //   API.getCurrentCards()
  //     .then(res =>
  //       this.setState({
  //         word: this.state.word,
  //         translated: this.state.translated,
  //         currentCard: this.getRandomCard()
  //       })
  //     ).catch(err => console.log(err));
  // };

  //here currentCards is the array that holds the cards 
  getRandomCard(currentCards) {
    var current = currentCards[Math.floor(Math.random() * currentCards.length)];
    return (current);
  }

  // updateCard() {
  //   const currentCard = this.state.cards;
  //   this.setState({
  //     currentCard: this.getRandomCard(currentCard)
  //   })
  // }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <h1>Practice Page</h1>
            <Jumbotron>
              <div className="row">
                <FlashCard word={this.state.currentCard.word} translated={this.state.currentCard.translated} />
              </div>

              <div className="button">
                {/* <NextBtn nextCard={this.updateCard} /> */}
              </div>
            </Jumbotron>
          </Col>
        </Row>

        <Row>
          <Col size="md-2">
            <Link to="/cards">← Back To New Cards</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Practice;
