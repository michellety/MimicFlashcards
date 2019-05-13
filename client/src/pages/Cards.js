import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

class Cards extends Component {
  state = {
    cards: [],
    word: "",
    translated: ""
  };

  componentDidMount() {
    this.loadCards();
  }

  loadCards = () => {
    API.getCards()
      .then(res =>
        this.setState({ cards: res.data, word: "", translated: "" })
      )
      .catch(err => console.log(err));
  };

  deleteCard = id => {
    API.deleteCard(id)
      .then(res => this.loadCards())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.word && this.state.translated) {
      API.saveCard({
        word: this.state.word,
        translated: this.state.translated
      })
        .then(res => this.loadCards())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
      <Row>
          <Col size="md-2">
            <Link to="/login">← Log Out</Link>
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
          <h1>Create More Cards</h1>
            <Jumbotron>
              <form>
              <Input
                value={this.state.word}
                onChange={this.handleInputChange}
                name="word"
                placeholder="Word (required)"
              />
               <Input
                value={this.state.translated}
                onChange={this.handleInputChange}
                name="translated"
                placeholder="Translated (required)"
              />
          
              <FormBtn
                disabled={!(this.state.word && this.state.translated)}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
            </Jumbotron>
            
          </Col>
          <Col size="md-6 sm-12">
          <h1>Review</h1>
            <Jumbotron>
              <Link to={"/practice"}>Practice here</Link>
            </Jumbotron>
            <h3>Card Stack</h3>
            {this.state.cards.length ? (
              <List>
                {this.state.cards.map(card => (
                  <ListItem key={card._id}>
                    <Link to={"/cards/" + card._id}>
                      <strong>
                        "{card.word}" translates to: "{card.translated}"
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteCard(card._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Cards Crated Yet!</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Cards;
