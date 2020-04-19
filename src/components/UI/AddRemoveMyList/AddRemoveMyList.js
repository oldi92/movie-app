import React from "react";
import { connect } from "react-redux";

import classes from "./AddRemoveMyList.module.css";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faBan } from "@fortawesome/free-solid-svg-icons";
import * as actions from "../../../store/action";

const AddRemoveMyList = (props) => {
  const filterButtonToggle = props.buttonToggle.filter(
    (element) => element === props.title
  );

  return (
    <Auxiliary>
      {props.title === filterButtonToggle[0] ? (
        <button
          className={classes.MyListButton}
          onClick={() => {
            props.onRemoveMyList(props.title);
          }}
        >
          <FontAwesomeIcon
            icon={faBan}
            size="1x"
            style={{ paddingRight: "0.2vw" }}
          />
          Added MyList
        </button>
      ) : (
        <button
          className={classes.MyListButton}
          onClick={() => {
            props.onAddMyList(
              props.title,
              props.body,
              props.image,
              props.duration,
              props.category,
              props.rate
            );
            console.log(props.title);
          }}
        >
          <FontAwesomeIcon icon={faPlus} size="1x" /> MyList
        </button>
      )}
    </Auxiliary>
  );
};

const mapStateToProps = (state) => {
  return {
    buttonToggle: state.buttonToggle,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddMyList: (title, body, image, duration, category, rate) =>
      dispatch(actions.addMyList(title, body, image, duration, category, rate)),
    onRemoveMyList: (title) => dispatch(actions.removeMyList(title)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddRemoveMyList);
