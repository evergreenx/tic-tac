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

  // handle draw

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
  } else if (boxes.every((box) => box !== null)) {
    status = "Draw";
  } else {
    status = "Next player: " + (isXNext ? "X" : "O");
  }

   
    return (
      <>
        <div className="board-container">
          <p className="game-status">{status}</p>

                {/* game board-row */}
                <div class="board"></div>
         
        </div>
      </>
    );
}

export default Index;
