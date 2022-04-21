import React from "react";

import "./BoxItem.scss";

export const  = ({ value, onClick }) => {
  const style = value === "X" ? "box x" : "box o";

  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
};
