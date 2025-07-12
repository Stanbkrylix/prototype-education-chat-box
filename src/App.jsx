import { useState } from "react";
import { evaluate, random } from "mathjs";
import continentsWithAnimals from "./AnimalArray";
import quotes from "./Quotes";

import "./App.css";

function App() {
    const [valueInput, setValueInput] = useState("");
    const [continent, setContinent] = useState([]);
    const [quote, setQuote] = useState([]);
    const [answerInput, setAnswerInput] = useState(null);

    function handleInputChange(e) {
        setValueInput(e.target.value);
    }

    function selectContinent() {
        if (valueInput.toLowerCase().includes("asia")) {
            const continentValue = continentsWithAnimals.filter(
                (item) => item.name.toLowerCase() === "asia"
            );
            setContinent(continentValue);
        } else if (valueInput.toLowerCase().includes("africa")) {
            const continentValue = continentsWithAnimals.filter(
                (item) => item.name.toLowerCase() === "africa"
            );
            setContinent(continentValue);
        } else if (valueInput.toLowerCase().includes("europe")) {
            const continentValue = continentsWithAnimals.filter(
                (item) => item.name.toLowerCase() === "europe"
            );
            setContinent(continentValue);
        } else if (valueInput.toLowerCase().includes("south america")) {
            const continentValue = continentsWithAnimals.filter(
                (item) => item.name.toLowerCase() === "south america"
            );
            setContinent(continentValue);
        } else if (valueInput.toLowerCase().includes("north america")) {
            const continentValue = continentsWithAnimals.filter(
                (item) => item.name.toLowerCase() === "north america"
            );
            setContinent(continentValue);
        } else if (valueInput.toLowerCase().includes("australia")) {
            const continentValue = continentsWithAnimals.filter(
                (item) => item.name.toLowerCase() === "australia"
            );
            setContinent(continentValue);
        } else if (valueInput.toLowerCase().includes("antarctica")) {
            const continentValue = continentsWithAnimals.filter(
                (item) => item.name.toLowerCase() === "antarctica"
            );
            setContinent(continentValue);
        } else {
            alert("Please type a question, examples are in the suggestion box");
            setContinent([]);
            return;
        }
    }

    function handleClick() {
        if (!valueInput) {
            alert("Please type a question, examples are in the suggestion box");
            return;
        }

        const mathPattern = /^[0-9+\-*/().\s]+$/;

        if (valueInput.toLowerCase().includes("quote")) {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            const selectQuote = quotes[randomIndex];

            const quoteAnswer = `${selectQuote.quote} Quote by ${selectQuote.author}.`;
            setAnswerInput(quoteAnswer);
            console.log(answerInput);
            return;
        }

        if (valueInput.toLowerCase().includes("number")) {
            const randomNumber = Math.floor(Math.random() * 1000);
            setAnswerInput(`Here is your random number ${randomNumber}.`);
            console.log(randomNumber);
            return;
        }

        if (valueInput.toLowerCase().includes("animal")) {
            selectContinent();
            console.log(continent[0]);
            let continentAnswer = `The type of animals you can find in ${continent[0].name} are: `;

            for (let i = 0; i < continent[0].animals.length; i++) {
                continentAnswer += `${continent[0].animals[i]}, `;
            }
            setAnswerInput(continentAnswer);
            console.log(continentAnswer);
            return;
        }

        if (!mathPattern.test(valueInput.trim())) {
            alert(
                "Please type a valid math expression like 4+5 or 2 * (3 + 1)"
            );
            return;
        }

        if (valueInput.includes(valueInput[0])) {
            const numberAnswer = calculate(valueInput);
            setAnswerInput(`The answer to your equation is ${numberAnswer}.`);
            console.log(answerInput);

            return;
        }

        alert("Please type a question, examples are in the suggestion box");
    }
    function calculate(value) {
        try {
            const answer = evaluate(value);
            // setAnswerInput(answer);
            return answer;
        } catch (error) {
            alert(
                `Error,(${valueInput}) is not recommended, Please type a question, example are in the suggestion box`
            );
            return;
        }
    }

    return (
        <>
            <div className="main-container">
                <SuggestionBox />
                <ChatBox
                    valueInput={valueInput}
                    handleInputChange={handleInputChange}
                    handleClick={handleClick}
                    answerInput={answerInput}
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
                <p>(1 + 1), (2 * 3), (4 / 2) ...</p>
                <p>What animal lives in continent...</p>
                <p>give me a random number...</p>
                <p>generate a random quote...</p>
            </div>
        </div>
    );
}

function ChatBox({ valueInput, handleInputChange, handleClick, answerInput }) {
    return (
        <div className="chat-box">
            <div className="display-answer">
                <h1>Educational ChatBox</h1>
                {answerInput && <p className="answer">{answerInput} </p>}
            </div>
            <div className="input-box">
                <input
                    placeholder="Ask a question"
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
