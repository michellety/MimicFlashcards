import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../components/Grid";
import API from "../utils/API";
import { Input, FormBtn } from "../components/Form";
import UserContext from "../utils/UserContext";

class Login extends React.Component {

  state = {
    email: "",
    password: "",
    userName: "",
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
    const { email, password, userName } = this.state;
    API.login({ email, password, userName })
      .then(res => {
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
    const { email, password, userName } = this.state;
    return (
      <UserContext.Consumer>

        {({ onLogin }) => (

          <Container fluid>

            <div className="entry mt-5">
              <div className="formContainer">
                <h1 className="header text-center mt-5">Welcome back!</h1>
                <h4 className="label text-center"> Please log in with your account details</h4>

                <Input
                  label="name"
                  type="text"
                  value={userName}
                  name="userName"
                  placeholder="Name (required)"
                  onChange={this.handleChange}
                />

                <Input
                  label="email"
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
                ) : null}

                <FormBtn onClick={() => this.handleLogin(onLogin)} disabled={!Boolean(this.state.email && this.state.password && this.state.userName)}>Submit</FormBtn>
                
                <button className="text-center btn-block"><Link to="/signup">New user? Sign up here </Link></button>

              </div>

            </div>

          </Container>

        )}

      </UserContext.Consumer>
    );
  }
}

export default Login;
