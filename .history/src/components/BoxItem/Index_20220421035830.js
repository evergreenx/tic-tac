import React from "react";

import "./BoxItem.scss";

const Index = ({ className }) => {

  // created 
  const classes = `column ${className}`;
  return <span className={classes}></span>;
};

export default Index;
