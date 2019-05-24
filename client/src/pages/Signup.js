import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Input, FormBtn } from "../components/Form";

class Signup extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name] : value
    });
  }

  onSignup = () => {
    const { history } = this.props;
    const { email, password } = this.state;
    API.signup({ email, password })
      .then(res => history.push("/login"))
      .catch(err => console.log("error: ", err));
  }
 
  render() {
    const { email, password } = this.state;
    return (
      <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>
                Sign- Up
              </h1>
              <div>
                <Input
                  type="text"
                  value={email}
                  name="email"
                  placeholder="Email (required)"
                  onChange={this.handleChange}
                />

                <Input
                  type="password"
                  value={password}
                  name="password"
                  placeholder="Password (required)"
                  onChange={this.handleChange}
                />
                <FormBtn onClick={this.onSignup} disabled={!this.state.email || !this.state.password}>SignUp</FormBtn>

              </div>
            </Jumbotron>
            
            <Link to="/login">← Returning user? Login here </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Signup;
