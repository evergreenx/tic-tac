import { useState } from "react";
import "./Board.scss";
import BoxItem from "../BoxItem";

function Index() {
  const [boxes, setBoxes] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClickOnBox = (index) => {
    boxes[index] = isXNext ? "X" : "O";

    setBoxes(boxes);
    setIsXNext(!isXNext);
  };

  return (
    <div className="board">
      {/* game board-row */}
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
          onClick={() => handleClickOnBox(3)}
        />
      </div>

      {/* game board-row */}

      <div class="board-row">
        <BoxItem className={"border-bottom"} value={boxes[6]} />
        <BoxItem className={"border-bottom"} value={boxes[7]} />
        <BoxItem className={""} value={boxes[8]} />
      </div>
    </div>
  );
}

export default Index;
