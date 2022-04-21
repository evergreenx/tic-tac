import React from "react";

import "./BoxItem.scss";

const   index  = ({ value, onClick }) => {
  const style = value === "X" ? "box x" : "box o";

  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
};

export default Index ;