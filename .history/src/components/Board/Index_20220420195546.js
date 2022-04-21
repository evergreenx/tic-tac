import React from "react";
import "./Board.scss";
import {useState} from 'react';
function index() {


    const [board, setBoard] = useState([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
        
  return (
    <div className="board">
      <button>X</button>

      <button>0</button>

      <button>0</button>

      <button>X</button>
      <button>X</button>
      <button>X</button>
      <button>X</button>
      <button>X</button>
      <button>X</button>
    </div>
  );
}

export default index;
