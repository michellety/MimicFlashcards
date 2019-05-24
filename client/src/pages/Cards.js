import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import { Redirect } from 'react-router-dom';
import UserContext from "../utils/UserContext"

class Cards extends Component {
  static contextType = UserContext;

  state = {
    cards: [],
    word: "",
    translated: ""
  };

  componentDidMount() {  
    const { user } = this.context;
    console.log(user)
    if(user){
      this.loadCards(user.token);
    }
    //need token to access the api
  }

  // translateWord = () => {
  //   API.translator()
  //     .then(res => 
  //       this.setState({translated: this.state.translated})
  //       )
  //       .catch(err = console.log(err));
  // }

  loadCards = (token) => {
      API.getCards(token)
        .then(res =>
          this.setState({ cards: res.data, word: "", translated: "" })
        )
        .catch(err => console.log(err));
  };

  deleteCard = (id) => {
    const { user } = this.context;
    API.deleteCard(id, user.token)
      .then(res => this.loadCards(user.token))
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
    const { user } = this.context;
    
    if (this.state.word && this.state.translated) {
      API.saveCard({
        word: this.state.word,
        translated: this.state.translated
      }, user.token)
        .then(res => this.loadCards(user.token))
        .catch(err => console.log(err));
    }
  };

  render() {
    //const { user } = this.context;
    return (
      //if logged in, display cards 
      <UserContext.Consumer>
        {({user}) => {
          if(!user) {return <Redirect to="/login" />}
          return (
          <Container fluid>
            <Row>
              <Col size="md-2">
                <Link to="/login">← Log Out</Link>
              </Col>
            </Row>
            <Row>
              <Col size="md-6">
                <h1>Review for {user.email}?</h1>
                <Jumbotron>
                  <Link to={"/practice"}>Practice here</Link>
                </Jumbotron>
  
              </Col>
              <Col size="md-6 sm-12">
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
                      onClick={this.handleFormSubmit}>
                      Submit
                  </FormBtn>
  
                  </form>
                </Jumbotron>
              </Col>
            </Row>
  
            <Row>
              <Col size="md-6 sm-12">
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
                ) : <p>Please log in to see created cards.</p>}
              </Col>
            </Row>
          </Container>)
        }}
      </UserContext.Consumer>
    );
  }
}

export default Cards;
