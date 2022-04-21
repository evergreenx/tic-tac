import { useState } from "react";
import "./Board.scss";
import BoxItem from "../BoxItem";

function Index() {
  const [boxes, setBoxes] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  // function to handle winning conditions
  const handleWinning = () => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
        return boxes[a];
      }
    }
    return null;
  };

 

  // handle click event on box
  const handleClickOnBox = (index) => {
    if (boxes[index] || handleWinning()) {
      return;
    }

    boxes[index] = isXNext ? "X" : "O";

    setBoxes(boxes);
    setIsXNext(!isXNext);
  };

  const winner = handleWinning(boxes);
  let status;

  if (winner) {
    status = `Winner is : ${winner}`;
  }
  // handle draw
  else if (boxes.every((box) => box !== null)) {
    status = "Draw";
    // w
  } else {
    status = "Next player: " + (isXNext ? "X" : "O");
  }

  const handleResetGame = () => {
    setBoxes(Array(9).fill(null));
    setIsXNext(true);
  };
  return (
    <>
      <div className="board-container">
        {/* game board-row */}
        <div class="board">
          <div class="board-row">
            <BoxItem
              className={"border-bottom-right "}
              value={boxes[0]}
              onClick={() => handleClickOnBox(0)}
            />
            <BoxItem
              className={"border-bottom-right "}
              value={boxes[1]}
              onClick={() => handleClickOnBox(1)}
            />
            <BoxItem
              className={"border-right"}
              value={boxes[2]}
              onClick={() => handleClickOnBox(2)}
            />
          </div>

          {/* game board-row */}

          <div class="board-row">
            <BoxItem
              className={"border-bottom-right "}
              value={boxes[3]}
              onClick={() => handleClickOnBox(3)}
            />
            <BoxItem
              className={"border-bottom-right "}
              value={boxes[4]}
              onClick={() => handleClickOnBox(4)}
            />
            <BoxItem
              className={"border-right"}
              value={boxes[5]}
              onClick={() => handleClickOnBox(5)}
            />
          </div>

          {/* game board-row */}

          <div class="board-row">
            <BoxItem
              className={"border-bottom"}
              value={boxes[6]}
              onClick={() => handleClickOnBox(6)}
            />
            <BoxItem
              className={"border-bottom"}
              value={boxes[7]}
              onClick={() => handleClickOnBox(7)}
            />
            <BoxItem
              className={""}
              value={boxes[8]}
              onClick={() => handleClickOnBox(8)}
            />
          </div>
        </div>

        <div class="game--indicator">
          <button onClick={handleResetGame} class="reset--button--text">
            Reset Game
          </button>

          <p className="game--status">{status}</p>
        </div>
      </div>
    </>
  );
}

export default Index;
