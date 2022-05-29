import React from "react";

import classes from "./NotFound.module.css";
import icon from "../asssets/icon.png";

const NotFound = () => {
  return (
    <div>
      <img src={icon} className={classes.error}></img>
      <div className={classes.message}>No quote found</div>
    </div>
  );
};

export default NotFound;
