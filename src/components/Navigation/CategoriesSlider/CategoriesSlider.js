import React, { useState } from "react";
import { connect } from "react-redux";

import { NavLink } from "react-router-dom";
import classes from "./CategoriesSlider.module.css";
import * as actions from "../../../store/action";

const CategoriesSlider = (props) => {
  const [action] = useState("action");
  const [comedy] = useState("comedy");
  const [drama] = useState("drama");
  const [thriller] = useState("thriller");

  return (
    <ul
      className={classes.CategoriesSlider}
      style={{
        transition: "all 0.3s ease-in-out",
        opacity: props.show ? "1" : "0",
        transform: props.show ? "translateY(0)" : "translateY(-20vh)",
      }}
    >
      <li onClick={() => props.category(action)}>
        <NavLink to="/category" className={classes.NavLink}>
          Action
        </NavLink>
      </li>
      <li onClick={() => props.category(comedy)}>
        <NavLink to="/category" className={classes.NavLink}>
          Comedy
        </NavLink>
      </li>
      <li onClick={() => props.category(drama)}>
        <NavLink to="/category" className={classes.NavLink}>
          Drama
        </NavLink>
      </li>
      <li onClick={() => props.category(thriller)}>
        <NavLink to="/category" className={classes.NavLink}>
          Thriller
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    category: (category) => dispatch(actions.category(category)),
  };
};
export default connect(null, mapDispatchToProps)(CategoriesSlider);
