import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Detail extends Component {
  state = {
    card: {}
  };
  // When this component mounts, grab the card with the _id of this.props.match.params.id
  // e.g. localhost:3000/cards/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getCard(this.props.match.params.id)
      .then(res => this.setState({ card: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Edit card</h1>
              <h3>
                {this.state.card.text}
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

export default Detail;
