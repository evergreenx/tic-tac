import React from "react";
import "./Board.scss";
import { useState } from 'react';
import BoxItem from "./BoxItem";
function Index() {


    const [board, setBoard] = useState([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]);
  return (
    <div className="board">
    
    </div>
  );
}

export default Index;
