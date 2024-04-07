import { useState } from "react";
import scissors from "./assets/scissors.svg";
import "./App.css";

const options = ["✊", "✋", "✌️"];

function App() {
  const [player, setPlayer] = useState("");
  const [computer, setComputer] = useState("🎲");

  function getRandomOption() {
    setComputer("🎲");
    setTimeout(() => {
      setComputer(options[Math.floor(Math.random() * 3)]);
    }, 2000);
  }

  return (
    <>
      <div>
        <img src={scissors} className="logo" alt="Scissors icon" />
      </div>
      <h1>Player vs. Computer</h1>
      <h2>
        {player} vs. {computer}
      </h2>
      <div>
        Choose your option
        {options.map((option) => (
          <button
            key={option}
            onClick={() => {
              setPlayer(option);
              getRandomOption();
            }}
          >
            {option}
          </button>
        ))}
      </div>
      <p className="read-the-docs">
        Choose an option and see if you won against the computer.
      </p>
    </>
  );
}

export default App;
