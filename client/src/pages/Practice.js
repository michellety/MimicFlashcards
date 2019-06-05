import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import FlashCard from "../components/FlashCard";
import NextBtn from "../components/NextBtn";
import UserContext from "../utils/UserContext";
// import Footer from "../components/Footer";


class Practice extends Component {
  static contextType = UserContext;

  state = {
    cards: [],
    text: "",
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
    API.getCardsForUser(token)
      .then(res => {
        console.log(res.data);
        this.setState({ cards: res.data, text: "", translated: "", currentCard: this.getRandomCard(res.data) })
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
        <section className="m-5 p-3">
        <Row>
          <Col size="md-2">
            <button><Link to="/cards">← Create New Cards</Link></button>
          </Col>
        </Row>

        <Row>
          <Col size="md-12">
            <div className="row">
              <FlashCard text={this.state.currentCard.text} translated={this.state.currentCard.translated} />
            </div>   
          </Col>
        </Row>

        <Row>
          <Col size="md-12">
            <NextBtn onClick={this.nextCard} />
          </Col>
        </Row>
        
        </section>
      </Container>
    );
  }
}

export default Practice;
