import React from "react";

import classes from "./Categories.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faPlay } from "@fortawesome/free-solid-svg-icons";

const Categories = (props) => {
  return (
    <li className={classes.Categories}>
      <img src={props.image} alt="actions Images" />
      <div className={classes.Paragraph}>
        <h3>{props.title}</h3>
        <p>{props.body}</p>
        <div>
          <button>
            <FontAwesomeIcon
              icon={faPlay}
              size="1x"
              style={{ paddingRight: "0.5vw" }}
            />
            Play
          </button>
          <button onClick={props.onClick}>
            <FontAwesomeIcon
              icon={faInfo}
              size="1x"
              style={{ paddingRight: "0.5vw" }}
            />
            Info
          </button>
        </div>
      </div>
    </li>
  );
};

export default Categories;
