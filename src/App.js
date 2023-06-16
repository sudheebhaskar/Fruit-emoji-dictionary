import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "Apple",
  "🍏": "Green apple",
  "🍐": "Pear",
  "🍑": "Peach",
  "🍓": "Strawberry",
  "🍒": "Cherries",
  "🥝": "Kiwi",
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Orange",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍅": "Tomato",
  "🥥": "Coconut",
  "🥑": "Avocado",
  "🍆": "Eggplant",
  "🥔": "Potato",
  "🥕": "Carrot",
  "🌽": "Corn",
  "🌶️": "Hot pepper",
  "🥦": "Broccoli"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    // processing
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning); // react call to show output
  }

  function emojiClickHandler(emoji) {
    // processing
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning); // react call to show output
  }
  return (
    <div className="App">
      <h1> Fruits Emoji Interpreter!</h1>

      <input
        onChange={emojiInputHandler}
        placeholder="Type here"
        style={{
          width: "50%",
          padding: "1rem",
          margin: "1rem",
          border: "2px solid black"
        }}
      ></input>

      <h2> {meaning} </h2>
      {/* Actual output set by React using useState */}

      <h3> Emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
