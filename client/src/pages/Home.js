import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Home extends Component {

    render() {
        return (
            <div ClassName="landing">
                <div className="splash">
                    <ul className="options">
                        <li><Link to="/signup">New user: Sign up here</Link></li>
                        <li><Link to="/login">Current user: Sign in here</Link></li>
                    </ul>
                </div>
                <div className="intro">
                    <div className="about">
                    <p>Information about the app</p>
                    <p>Build custom cards to learn a new language</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
