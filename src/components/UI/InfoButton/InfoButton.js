import React from "react";

import classes from "./InfoButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";

const InfoButton = (props) => {
  return (
    <button onClick={props.onClick} className={classes.Button}>
      <FontAwesomeIcon
        icon={faInfo}
        size="1x"
        style={{ paddingRight: "0.5vw" }}
      />
      Info
    </button>
  );
};

export default InfoButton;
