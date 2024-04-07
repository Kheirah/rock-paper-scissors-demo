import { useState } from "react";
import scissors from "./assets/scissors.svg";
import "./App.css";

const options = ["✊", "✋", "✌️"];

const winStates = [
  ["✊", "✌️"],
  ["✌️", "✋"],
  ["✋", "✊"],
];

function App() {
  const [player, setPlayer] = useState("");
  const [computer, setComputer] = useState("🎲");

  function getRandomOption() {
    setComputer("🎲");
    setTimeout(() => {
      setComputer(options[Math.floor(Math.random() * 3)]);
    }, 2000);
  }

  /* derived state */
  let outcome = "pending";
  if (computer != "🎲" && player != computer) {
    outcome = winStates.some(
      ([human, npc]) => player === human && computer === npc
    )
      ? "win"
      : "lose";
  } else if (player === computer) {
    outcome = "draw";
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
      <div className="card">
        <OutcomeMessage outcome={outcome} />
      </div>
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

const outcomeMessages = {
  pending: "wait for it ...",
  win: "YOU WIN!",
  lose: "YOU LOSE!",
  draw: "DRAW!",
};

const OutcomeMessage = ({ outcome }) => {
  const message = outcomeMessages[outcome];
  return message ? <h2>{message}</h2> : null;
};

export default App;
