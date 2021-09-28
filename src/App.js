import react, { useState } from "react";
import "./styles.css";

var emojieObj = {
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss",
  "😗": "Kissing Face",
  "🙂": "Smiling Face",
  "😀": "Grinning Face"
};

var ourEmojies = Object.keys(emojieObj);

export default function App() {
  var [userInput, setUserInput] = useState("");

  function onChangeHandler(event) {
    var searchInput = event.target.value;
    if (emojieObj[searchInput]) {
      setUserInput(emojieObj[searchInput]);
    } else {
      setUserInput("No matching data");
    }
  }

  function clickHandler(emojie) {
    var meaning = emojieObj[emojie];
    setUserInput(meaning);
  }

  return (
    <div className="App">
      <h1>ReactPractice</h1>
      <input onChange={onChangeHandler}></input>
      <h4>{userInput}</h4>
      {ourEmojies.map(function (emojie) {
        return (
          <span onClick={() => clickHandler(emojie)} key={emojie}>
            {emojie}
          </span>
        );
      })}
    </div>
  );
}
