import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

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
                        <h2>Efficiently learn useful foreign language phrases by creating custom flashcards!</h2>
                        <h2>Make the perfect phrase guide</h2>
                        <p>Sign in, choose a language, enter a word or phrase in english, then translate.
                            If the translation is as desired, create card and it is added to the stack.
                            Click Practice to randomly select a flashcard. Hover the cursor to see the translation.
                        </p>
                        <ReactPlayer url='https://www.youtube.com/watch?v=9_LeDj6fg9s'/>
                    
                    
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
