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
    language: "",
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
    const { user } = this.context;
    API.getCardsForUser(token, user.id)
      .then(res => {
        console.log(res.data);
        this.setState({ cards: res.data, text: "", translated: "", language: "", currentCard: this.getRandomCard(res.data) })
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
        <section className="mb-5 pb-5">
        <Row>
          <Col size="md-2">
            <button><Link to="/cards">← Create New Cards</Link></button>
          </Col>
        </Row>

        <Row>
          <Col size="md-12">
            <div className="row">
              <FlashCard text={this.state.currentCard.text} translated={this.state.currentCard.translated} language={this.state.currentCard.language}/>
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
