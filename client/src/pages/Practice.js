import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import FlashCard from "../components/FlashCard";
import NextBtn from "../components/NextBtn";
import UserContext from "../utils/UserContext"


class Practice extends Component {
  static contextType = UserContext;

  state = {
    cards: [],
    word: "",
    translated: "",
    currentCard: {}
  };

  componentDidMount() {
    const { user } = this.context;
    console.log(user);
    if(!user){
      this.props.history.push("/login")
    } else {
      this.getCurrentCard(user.token);
    }
   
  }

  getCurrentCard = (token) => {
    API.getCards(token)
      .then(res => {
        console.log(res.data);
        this.setState({ cards: res.data, word: "", translated: "", currentCard: this.getRandomCard(res.data) })
      }).catch(err => console.log(err));
  };

  //here allCards is the array that holds the cards 
  getRandomCard = (allCards) => {
    var current = allCards[Math.floor(Math.random() * allCards.length)];
    return (current);
  };

  nextCard = () => {
    const allCards = this.state.cards;
    this.setState({
      currentCard: this.getRandomCard(allCards)
    })
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <h1>Practice Page</h1>
            <div className="row">
              <FlashCard word={this.state.currentCard.word} translated={this.state.currentCard.translated} />
            </div>
            <NextBtn onClick={this.nextCard} />
          </Col>
        </Row>

        <Row>
          <Col size="md-2">
            <Link to="/cards">← Create New Cards</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Practice;
