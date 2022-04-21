import React from "react";

import "./BoxItem.scss";

const Index = ({ className , value }) => {
  // created a class for the BoxItem based on the className passed down in props
  const classes = `column ${className}`;
  return <span className={classes}>{</span>;
};

export default Index;
