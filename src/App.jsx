import scissors from "./assets/scissors.svg";
import "./App.css";

const options = ["✊", "✌️", "✋"];

function App() {
  return (
    <>
      <div>
        <img src={scissors} className="logo" alt="Scissors icon" />
      </div>
      <h1>Player vs. Computer</h1>
      <div>
        Choose your option
        {options.map((option) => (
          <button key={option}>{option}</button>
        ))}
      </div>
      <p className="read-the-docs">
        Choose an option and see if you won against the computer.
      </p>
    </>
  );
}

export default App;
