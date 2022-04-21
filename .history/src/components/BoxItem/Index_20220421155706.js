import React from "react";

import "./BoxItem.scss";

const Index = ({ className, value, onClick }) => {
  // created a class for the BoxItem based on the className passed down in props
  const classes = `column ${className}`;

  return (
    <span
      className={`${classes} ${value === "X" ? "xstyle" : "O"}`}
      onClick={onClick}
    >
      {value}
    </span>
  );
};

export default Index;
