import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

class Home extends Component {

    //   state = {
    //     email: "",
    //     password: "",
    //   };

    //   componentDidMount() {
    //     const token = localStorage.getItem("current_user_token");
    //     if (token) {
    //       API.validateToken(token)
    //         .then(() => this.props.history.push("/"))
    //         .catch(() => localStorage.removeItem("current_user_token"));
    //     }
    //   };

    //   onSubmit = () => {
    //     API.login(this.state)
    //       .then(res => localStorage.setItem("current_user_token", res.data.token))
    //       .catch(err => console.log(err));
    //   };


    //   onChange = key => e => this.setState({ [key]: e.target.value });

    render() {
        return (

        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1>
                            Home Page
                        </h1>
                        <Row>
                            <Col size="md-6">
                                <Link to="/signup">New user: Sign up here </Link>
                            </Col>
                            <Col size="md-6">
                                <Link to="/login">Current user: Sign in here </Link>
                            </Col>
                        </Row>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>

        );
    }
}

export default Home;
