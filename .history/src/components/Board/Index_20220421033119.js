import React from "react";
import "./Board.scss";
import { useState } from "react";
import BoxItem from "../BoxItem";
function Index() {
  return (
    <div className="board">
      <div class="board-row">
        <BoxItem className={"bottom-right"} />
        <BoxItem border-bottom-right />
        <BoxItem />
      </div>

      <div class="board-row">
        <BoxItem />
        <BoxItem />
        <BoxItem />
      </div>

      <div class="board-row">
        <BoxItem />
        <BoxItem />
        <BoxItem />
      </div>
    </div>
  );
}

export default Index;
