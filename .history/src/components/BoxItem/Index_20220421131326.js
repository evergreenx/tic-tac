import React from "react";

import "./BoxItem.scss";

const Index = ({ className , value , onClick }) => {
  // created a class for the BoxItem based on the className passed down in props
  const classes = `column ${className} value  ? 'X' : 'O'`;

 
  return (
    <span className={`${classes} ${value ? 'X' : '0'}`} onClick={onClick}>
      {value}
    </span>
  );
};

export default Index;
