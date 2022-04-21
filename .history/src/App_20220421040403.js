import "./App.css";
import Board from "./components/Board";

function App() {
  return (
    <div className="App">

      
      <h1 className="heading">
        Let's play the <br /> Tic-Tac
      </h1>
      <div class="reset--button">
        <button class="reset--button--text">Reset</button>
      </div>
      <Board />
    </div>
  );
}

export default App;
