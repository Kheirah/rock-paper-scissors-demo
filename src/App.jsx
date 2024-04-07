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
        {outcome === "pending" && <h3>wait for it ...</h3>}
        {outcome === "win" && <h3>YOU WIN!</h3>}
        {outcome === "draw" && <h3>DRAW!</h3>}
        {outcome === "lose" && <h3>YOU LOSE!</h3>}
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

export default App;
