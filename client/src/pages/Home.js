import React, { Component } from "react";
import { Link } from "react-router-dom";
import Player from "../components/Player";
import GifPlayer from "../components/GifPlayer";
import "./homestyle.css";

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
                        <h2>Efficiently learn useful foreign language phrases by creating custom flashcards!</h2>

                        <h2>Make the perfect phrase guide</h2>
                        <div className="b">
                            <GifPlayer />
                        </div>
                        <p>Choose a language, enter a word or phrase in english, then translate.</p>
                        <p>If the translation is as desired, added the flashcard to the stack.</p>

                        <h2>Click Practice to review the custom study guide.</h2>
                        <div className="b">
                            <Player />
                        </div>
                        <p>Hover the cursor to see the translation.</p>
                        <p>Clicking the next button randomly selects another flashcard.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
