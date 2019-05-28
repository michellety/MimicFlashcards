import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../components/Grid";

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
      [name]: value
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

        <div className="entry mt-5">

          <div className="formContainer">
            <h1 className="header text-center mt-5">Sign- Up</h1>
            <h4 className="label text-center"> Please enter your email and create an account password</h4>
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

            <div className="text-center alternate mt-2">
              <Link to="/login">Returning user? Login here </Link>
            </div>
          </div>
        </div>

      </Container>
    );
  }
}

export default Signup;
