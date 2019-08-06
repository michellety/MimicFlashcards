import React, { Component } from "react";
import { Link } from "react-router-dom";
import Player from "../components/Player";
import GifPlayer from "../components/GifPlayer";
import "./homestyle.css";

class Home extends Component {

    render() {
        return (
            <div className="landing">
                <div className="splash">

                </div>
                <div className="intro">
                    <div className="about">
                        <div className="b">
                            <div>
                                <h2>Design custom flashcards to efficiently mimic new languages!</h2>
                                <p>This is a personalized flashcard generator with translations powered by Google Translate.</p>
                                <p>Create an account to begin building, reviewing, and saving your cardstack.</p>
                                <ul className="options">
                                    <li><Link to="/signup">New user :<span className="emphasize"> Sign up here</span></Link></li>
                                    <li><Link to="/login">Current user :<span className="emphasize"> Login here</span></Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="b">
                            <div>
                                <h2>Make the perfect phrase guide</h2>
                                <p>Guidelines for how to use this website: </p>
                                <p>Choose a language, enter a word or phrase in english, then translate.</p>
                                <p>If the translation is as desired, save the flashcard to the stack.</p>
                            </div>
                            <GifPlayer />
                        </div>

                        <div className="b">
                            <div>
                                <h2>Review your cardstack</h2>
                                <p>Click Practice to study from the custom study guide.</p>
                                <p>Hover the cursor to see the translation.</p>
                                <p>Clicking the next button randomly selects another flashcard.</p>
                            </div>
                            <Player />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
