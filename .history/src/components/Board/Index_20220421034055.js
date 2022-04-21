import React from "react";
import "./Board.scss";
import { useState } from "react";
import BoxItem from "../BoxItem";
function Index() {
  return (
    <div className="board">
      <div class="board-row">
        <BoxItem className={"border-bottom-right "} />
        <BoxItem className={"border-bottom-right "} />
        <BoxItem className={"border-bottom"} />
      </div>

      <div class="board-row">
        <BoxItem className={"border-bottom-right "} />
        <BoxItem className={"border-bottom-right "} />
        <BoxItem className={"border-right"} />
      </div>

      <div class="board-row">
        <BoxItem className={"border-bottom-right"} />
        <BoxItem className={"border-bottom-right"} />
        <BoxItem className={"border-right"} />
      </div>
    </div>
  );
}

export default Index;
