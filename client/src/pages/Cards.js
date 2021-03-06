import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import { Redirect } from 'react-router-dom';
import UserContext from "../utils/UserContext";
import { GridArea, GridItem } from "../components/Cardstack";
import Radio from "../components/Radio";

class Cards extends Component {
  static contextType = UserContext;
  state = {
    cards: [],
    translated: "",
    target: "",
    text: "",
    language: ""
  };

  componentDidMount() {
    const { user } = this.context;
    console.log(user)
    if (user) {
      this.loadCards(user.token);
    }
  }

  loadCards = (token) => {
    const { user } = this.context;
    API.getCardsForUser(token, user.id)
      .then(res =>
        this.setState({ cards: res.data, text: "", translated: "", language: "" })
      )
      .catch(err => console.log(err));
  };

  deleteCard = (id) => {
    const { user } = this.context;
    API.deleteCard(id, user.token)
      .then(res => this.loadCards(user.token))
      .catch(err => console.log(err));
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { user } = this.context;

    if (this.state.text && this.state.translated) {
      API.saveCard({
        text: this.state.text,
        translated: this.state.translated,
        language: this.state.language
      }, user.token, user.id)
        .then(res => this.loadCards(user.token))
        .catch(err => console.log(err));
    }
  };

  handleTargetChange = (event) => {
    const { value } = event.target;
    this.setState({
      target: value
    });
  }

  handleTranslation = (event) => {
    event.preventDefault();
    const { user } = this.context;
    const { target, text } = this.state;
    if (target === "da") {
      this.setState({language: "Danish"})
    } else if (target ==="nl"){
      this.setState({language: "Dutch"})
    } else if (target ==="pt"){
      this.setState({language: "Portuguese"})
    } else if (target ==="es"){
      this.setState({language: "Spanish"})
    };
    API.startTranslation({ target, text}, user.token)
      .then(res => this.setState({ translated: res.data }))
      .catch(err => console.log(err))
  }

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
                    <h1 className="mb-5 pb-5">Review for {user.userName}</h1>
                    <div className="pt-4"><button className="btn-block"><Link to={"/practice"}>Practice here</Link></button></div>
                  </Jumbotron>
                </Col>

                <Col size="md-6 sm-12">
                  <Jumbotron className="create">
                    <h1>Create More Cards</h1>
                    <form>
                      <h4>Select a language</h4>

                      <Radio value={this.state.target} onChange={this.handleTargetChange} />

                      <Input
                        value={this.state.text}
                        onChange={this.handleInputChange}
                        name="text"
                        placeholder="English Word or Phrase (required)"
                      />

                      <FormBtn
                        disabled={!(this.state.text)}
                        onClick={this.handleTranslation}>
                        Translate
                      </FormBtn>

                      <br></br>

                      <Input
                        value={this.state.translated}
                        onChange={this.handleInputChange}
                        name="translated"
                        placeholder="Translation (required)"
                      />

                      <FormBtn
                        disabled={!(this.state.text && this.state.translated)}
                        onClick={this.handleFormSubmit}>
                        Submit
                      </FormBtn>

                    </form>
                  </Jumbotron>
                </Col>
              </Row>

              <Row>
                <Col size="m-12 sm-12">
                  <Jumbotron>
                    <h3 className="text-center">Card Stack</h3>
                    <div className="cardstack">
                      {this.state.cards.length ? (
                        <GridArea>
                          {this.state.cards.map(card => (
                            <GridItem key={card._id}>
                              <Link to={"/cards/" + card._id}>
                                <strong>"{card.text}"</strong>
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
                    </div>
                  </Jumbotron>
                </Col>
              </Row>
            </Container>)
        }}
      </UserContext.Consumer>
    );
  }
}

export default Cards;
