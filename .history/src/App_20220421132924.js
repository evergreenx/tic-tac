import Board from "./components/Board";

function App() {
  return (
    <section className="App">
      <div className="board-text">
        <h1 className="heading">
          Let's play the <br /> Tic-Tac Game
        </h1>
        <div class="reset--button">
          <button class="reset--button--text">Reset Game</button>
        </div>
      </div>

      <Board />
    </section>
  );
}

export default App;
