import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import { Redirect } from 'react-router-dom';
import UserContext from "../utils/UserContext";
import { GridArea, GridItem } from "../components/Cardstack";


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
    if (user) {
      this.loadCards(user.token);
    }
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
    return (
      //if logged in, display cards 
      <UserContext.Consumer>
        {({ user }) => {
          if (!user) { return <Redirect to="/login" /> }
          return (
            <Container fluid>
              <Row>
                <Col size="md-6 sm-12">

                  <Jumbotron>
                    <h1>Review for {user.email}</h1>
                    <button class="btn-block"><Link to={"/practice"}>Practice here</Link></button>
                  </Jumbotron>

                </Col>
                <Col size="md-6 sm-12">

                  <Jumbotron className="create">
                    <h1>Create More Cards</h1>
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
                <Col size="m-12 sm-12">
                  {/* <div className="card m-5"> */}
                    <Jumbotron>
                    <h3 className="text-center">Card Stack</h3>
                    <div className="cardstack">
                      {this.state.cards.length ? (
                        <GridArea>
                          {this.state.cards.map(card => (
                            <GridItem key={card._id}>
                              <Link to={"/cards/" + card._id}>
                                <strong>"{card.word}"</strong> 
                                  <br></br>
                                  translates to: 
                                  <br></br>
                                  <strong>"{card.translated}"</strong>
                              </Link>
                              <DeleteBtn onClick={() => this.deleteCard(card._id)} />
                            </GridItem>
                          ))}
                        </GridArea>
                      ) : <p>Card stack is empty!</p>}
                    </div></Jumbotron>
                  {/* </div> */}

                </Col>
              </Row>
            </Container>)
        }}
      </UserContext.Consumer>
    );
  }
}

export default Cards;
