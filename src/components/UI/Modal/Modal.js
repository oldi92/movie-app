import React from "react";

import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import classes from "./Modal.module.css";
import Youtube from "../Youtube/Youtube";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTimes } from "@fortawesome/free-solid-svg-icons";

/*
 MODAL COMPONENT

 receive 10 props to display modal with each movie

 props receive (10):

 1) Backdrop onClick={props.onClickModal}
 2) X close onClick={props.onClickModal}
 3) props.title
 4) props.rate
 5) props.show
 6) props.duration
 7) props.category
 8) props.trailer
 9) props.image
 10) props.body

 */

const Modal = (props) => {
  return (
    <Auxiliary>
      <div
        className={classes.BackDrop}
        onClick={props.onClickModal}
        style={{
          transition: "opacity 0.3s ease-in",
          opacity: !props.show ? "1" : "0",
          transform: !props.show ? "translateY(0)" : "translateY(-150vh)",
        }}
      ></div>
      <div
        className={classes.Modal}
        style={{
          transition: "all 0.4s ease-in-out",
          opacity: !props.show ? "1" : "0",
          transform: !props.show ? "translateY(0)" : "translateY(-100vh)",
        }}
      >
        <div className={classes.TitleDiv}>
          <div className={classes.Title}>{props.title}</div>
          <div className={classes.Star}>
            <FontAwesomeIcon icon={faStar} size="2x" />
          </div>
          <div className={classes.Rate}>
            {props.rate}
            <span>/10</span>
          </div>
          <div className={classes.Close}>
            <FontAwesomeIcon
              onClick={props.onClickModal}
              icon={faTimes}
              size="2x"
            />
          </div>
        </div>

        <div className={classes.Duration}>
          <div className={classes.DurationTime}>Duration: {props.duration}</div>
          <div>Category: {props.category}</div>
        </div>

        <div className={classes.Video}>
          <div className={classes.Youtube}>
            <Youtube trailer={props.trailer} style={{ width: "100%" }} />
          </div>
          <ul style={{ display: "flex", flexFlow: "row" }}>
            <li>
              <img src={props.image} alt="modal images" />
            </li>
            <li>
              <button className={classes.Button}>Play</button>
            </li>
          </ul>
        </div>

        <div className={classes.Context}>{props.body}</div>
      </div>
    </Auxiliary>
  );
};

export default Modal;
