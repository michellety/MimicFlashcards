import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Signup extends Component {
  state = {
    email: "",
    password: ""
  };

  // When this component mounts, grab the card with the _id of this.props.match.params.id
  // e.g. localhost:3000/cards/599dcb67f0f16317844583fc
  componentDidMount() {
    const token = localStorage.getItem("current_user_token");
    if (token) {
      API.validateToken(token)
        .then(() => this.props.history.push("/"))
        .catch(() => localStorage.removeItem("current_user_token"));
    }
  }

  onSubmit = () => {
    API.signup(this.state)
      .then(res => localStorage.setItem("current_user_token", res.data.token))
      .catch(err => console.log(err));
  };

  onChange = key => e => this.setState({ [key]: e.target.value });

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                Sign- Up
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

              <button onClick={this.onSubmit} disabled={!this.state.email || !this.state.password}>SignUp</button>


            </Jumbotron>
            <Link to="/login">← Returning user? Login here </Link>

          </Col>
        </Row>
      </Container>
    );
  }
}

export default Signup;
