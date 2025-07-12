import { useState } from "react";
import { evaluate } from "mathjs";

import "./App.css";

function App() {
    const [count, setCount] = useState(0);
    const [valueInput, setValueInput] = useState("");

    function handleInputChange(e) {
        setValueInput(e.target.value);
    }

    function handleClick() {
        if (!valueInput) {
            alert("Please type a question, example are in the suggestion box");
            return;
        }

        console.log(valueInput);
    }
    return (
        <>
            <div className="main-container">
                <SuggestionBox />
                <ChatBox
                    valueInput={valueInput}
                    handleInputChange={handleInputChange}
                    handleClick={handleClick}
                />
            </div>
        </>
    );
}

function SuggestionBox() {
    return (
        <div className="suggestions-question">
            <h2>Suggestion Questions</h2>
            <div>
                <p>What is 1 + 1...</p>
                <p>What animal lives in continent...</p>
                <p>give me a random number...</p>
                <p>generate a random quote...</p>
            </div>
        </div>
    );
}

function ChatBox({ valueInput, handleInputChange, handleClick }) {
    return (
        <div className="chat-box">
            <div className="display-answer">
                <h1>Educational ChatBox</h1>
                <p className="answer">answer placeholder</p>
            </div>
            <div className="input-box">
                <input
                    placeholder=""
                    type="text"
                    value={valueInput}
                    onChange={handleInputChange}
                />

                <button className="ask-it-btn" onClick={handleClick}>
                    Ask It
                </button>
            </div>
        </div>
    );
}
export default App;
