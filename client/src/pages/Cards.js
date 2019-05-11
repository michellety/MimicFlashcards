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
            <Jumbotron>
              <h1>Language Cards to Practice</h1>
            </Jumbotron>
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
              {/* <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />  */}
              <FormBtn
                disabled={!(this.state.word && this.state.translated)}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Cards to Review</h1>
            </Jumbotron>
            {this.state.cards.length ? (
              <List>
                {this.state.cards.map(card => (
                  <ListItem key={card._id}>
                    <Link to={"/cards/" + card._id}>
                      <strong>
                        {card.word} meaning {card.translated}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteCard(card._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Cards;
