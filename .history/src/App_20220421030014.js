import logo from "./logo.svg";
import "./App.css";
import Board from "./components/Board";

function App() {
  return (
    <div className="App">
      <h1 className="heading">
        Let's play the <br /> Tic-Tac
      </h1>
      <Board />
    </div>
  );
}

export default App;
