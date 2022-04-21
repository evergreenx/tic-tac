import React from "react";
import "./Board.scss";
import {useState} from 'react';
function ndex() {


    const [board, setBoard] = useState([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]);
  return (
    <div className="board">
          {
              board.map((row, rowIndex) => {
                  return (
      <button>X</button>
                        
                    )
    }
  
  );
}

export default index;
