import { useState } from "react";
import "./Board.scss";
import BoxItem from "../BoxItem";

function Index() {
    const [boxes, setBoxes] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    const handleClickOnBox  = (index) => {
   
        boxes[index] = isXNext ? "X" : "O";
        
        setBoxes(boxes);
        setIsXNext(!isXNext);
    };


  return (
    <div className="board">
      {/* game board-row */}
      <div class="board-row">
        <BoxItem className={"border-bottom-right "} value={boxes[0]} />
              <BoxItem className={"border-bottom-right "} value={[1]} />
        <BoxItem className={"border-right"} />
      </div>

      {/* game board-row */}

      <div class="board-row">
        <BoxItem className={"border-bottom-right "} />
        <BoxItem className={"border-bottom-right "} />
        <BoxItem className={"border-right"} />
      </div>

      {/* game board-row */}

      <div class="board-row">
        <BoxItem className={"border-bottom"} />
        <BoxItem className={"border-bottom"} />
        <BoxItem className={""} />
      </div>
    </div>
  );
}

export default Index;
