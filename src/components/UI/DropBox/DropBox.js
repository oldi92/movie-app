import React from "react";

import classes from "./DropBox.module.css";

const DropBox = (props) => {
  return (
    <div
      className={classes.DropBox}
      onClick={props.onClick}
      style={{
        opacity: props.show ? "1" : "0",
        transform: props.show ? "translateY(0)" : "translateY(-100%)",
      }}
    ></div>
  );
};

export default DropBox;
