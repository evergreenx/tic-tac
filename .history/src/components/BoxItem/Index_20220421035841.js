import React from "react";

import "./BoxItem.scss";

const Index = ({ className }) => {

  // created a className for the BoxItem based on the className passed in
  const classes = `column ${className}`;
  return <span className={classes}></span>;
};

export default Index;
