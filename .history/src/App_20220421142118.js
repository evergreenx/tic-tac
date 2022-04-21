import Board from "./components/Board";

function App() {
  return (
    <section className="App">
      <div className="board-text">
        <h1 className="heading">
          Let's play the <br /> Tic-tac-toe <br /> Game
        </h1>
      </div>

      <Board />
    </section>
  );
}

export default App;
