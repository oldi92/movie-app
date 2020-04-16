import React from "react";

import classes from "./CategoriesSlider.module.css";

const CategoriesSlider = (props) => {
  return (
    <ul
      className={classes.CategoriesSlider}
      style={{
        transition: "all 0.3s ease-in-out",
        opacity: props.show ? "1" : "0",
        transform: props.show ? "translateY(0)" : "translateY(-20vh)",
      }}
    >
      <li>Action</li>
      <li>Comedy</li>
      <li>Drama</li>
      <li>Thriller</li>
    </ul>
  );
};

export default CategoriesSlider;
