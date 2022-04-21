import React from "react";

import "./BoxItem.scss";

const Index = ({className}) => {
  // const style = value === "X" ? "box x" : "box o";

  const style = className === "bottom-right" ? "box bottom-right" : "box";
  return <span className="column className">X</span>;
};

export default Index;
