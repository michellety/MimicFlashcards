import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Input, FormBtn } from "../components/Form";
import UserContext from "../utils/UserContext";

class Login extends React.Component {

  state = {
    email: "",
    password: "",
    currentUser: null,
    error: null
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleLogin = (onLogin) => {
    const { history } = this.props;
    const { email, password } = this.state;
    API.login({ email, password })
      .then(res => {
        //localStorage.setItem("id_token", res.data.token)
        onLogin(res.data);
        console.log(res.data)
        history.push("/cards");
      })
      .catch(err => {
        console.log("error: ", err);
        this.setState({
          error: "Invalid password and email combination"
        })
      });
  };

  render() {
    const { email, password } = this.state;
    return (
      <UserContext.Consumer>

        {({ onLogin }) => (

          <Container fluid>
            <Row>
              <Col size="md-6 sm-12">
                <Jumbotron>
                  <div>
                    <h1>Login Page</h1>
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

                    {this.state.error ? (
                      <span className="alert">{this.state.error}</span>
                    ): null}

                    <FormBtn onClick={() => this.handleLogin(onLogin)} disabled={!Boolean(this.state.email && this.state.password)}>Submit</FormBtn>

                  </div>
                </Jumbotron>
              </Col>
            </Row>

            <Row>
              <Col size="md-2">
                <Link to="/signup">← New user? Sign up here </Link>
              </Col>
            </Row>
          </Container>

        )}
        
      </UserContext.Consumer>
    );
  }
}

export default Login;
