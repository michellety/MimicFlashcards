import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import FlashCard from "../components/FlashCard";

class Practice extends Component {
  state = {
    cards: []
  };
  // When this component mounts, grab the card with the _id of this.props.match.params.id
  // e.g. localhost:3000/cards/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getCard(this.props.match.params.id)
      .then(res => this.setState({ cards: res.data }))
      .catch(err => console.log(err));
  }

//random integer generation function 
//returns integer
//use to get index: object has front and back   


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
          <h1>Practice Page</h1>
            <Jumbotron>  
              <h3>
                {/* <FlashCard card={this.state.cards[this.randomInt()]} ></FlashCard> */}
              </h3>
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
