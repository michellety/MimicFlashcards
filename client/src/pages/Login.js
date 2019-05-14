import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Login extends Component {

  state = {
    email: "",
    password: "",
  };

  componentDidMount() {
    const token = localStorage.getItem("current_user_token");
    if (token) {
      API.validateToken(token)
        .then(() => this.props.history.push("/"))
        .catch(() => localStorage.removeItem("current_user_token"));
    }
  };

  onSubmit = () => {
    API.login(this.state)
      .then(res => localStorage.setItem("current_user_token", res.data.token))
      .catch(err => console.log(err));
  };


  //   state = {
  //     card: {}
  //   };
  // When this component mounts, grab the card with the _id of this.props.match.params.id
  // e.g. localhost:3000/cards/599dcb67f0f16317844583fc
  //   componentDidMount() {
  //     API.getCard(this.props.match.params.id)
  //       .then(res => this.setState({ card: res.data }))
  //       .catch(err => console.log(err));
  //   }

  onChange = key => e => this.setState({ [key]: e.target.value });

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                Login Page
              </h1>
              <input
                type="text"
                value={this.state.email}
                label="email"
                onChange={this.onChange("email")}
              />

              <input
                type="password"
                value={this.state.password}
                label="password"
                onChange={this.onChange("password")}
              />

              <button onClick={this.onSubmit} disabled={!Boolean(this.state.email && this.state.password)}>Log in</button>


            </Jumbotron>
          </Col>
        </Row>

        <Row>
          <Col size="md-2">
            <Link to="/signup">← New user? Sign up here </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
