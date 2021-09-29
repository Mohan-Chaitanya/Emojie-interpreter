import react, { useState } from "react";
import "./styles.css";

var emojieObj = {
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss",
  "😗": "Kissing Face",
  "🙂": "Smiling Face",
  "😀": "Grinning Face",
  "🥺": "Pleading Face",
  "😏": "Smirking Face",
  "😒": "Unamused Face",
  "🤤": "Drooling Face",
  "🥵": "Hot Face",
  "🥶": "Cold Face",
  "😵": "Dizzy Face"
};

var ourEmojies = Object.keys(emojieObj);

export default function App() {
  var [userInput, setUserInput] = useState("");

  function onChangeHandler(event) {
    var searchInput = event.target.value;
    // console.log(searchInput);
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
      <h4>Search for the emojie in the above search bar</h4>
      {ourEmojies.map(function (emojie) {
        return (
          <span onClick={() => clickHandler(emojie)} key={emojie}>
            {emojie}
          </span>
        );
      })}
      <h3 id="output">{userInput}</h3>
    </div>
  );
}
