import React from "react";
import "./Board.scss";
import {useState} from 'react';
function Index() {


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
                        <div className="row" key={rowIndex}>
                            {
                                row.map((cell, cellIndex) => {
                                    return (
                                        <div className="cell" key={cellIndex}>
                                            {cell}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
              }
              )}
        </div>
      
     }
    </div>
  );
}

export default Index;
