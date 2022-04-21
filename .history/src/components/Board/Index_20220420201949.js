import React from "react";
import "./Board.scss";
import { useState } from "react";
import BoxItem from "../BoxItem/Index";
function Index({ board, onClick }) {
  return (
    <div className="board">
      {board.map((value, idx) => {
        return (
          <BoxItem
            value={value}
            onClick={() => value === null && onClick(idx)}
          />
        );
      })}
    </div>
  );
}

export default Index;
