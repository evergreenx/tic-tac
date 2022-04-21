import React from "react";
import "./Board.scss";
import { useState } from "react";
import BoxItem from "../BoxItem";
function Index() {
  return (
    <div className="board">

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
