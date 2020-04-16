import React, { useState, useEffect } from "react";

import classes from "./Navigation.module.css";
import logo from "../../assets/logo/logo.png";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CategoriesSlider from "./CategoriesSlider/CategoriesSlider";

function Navigation() {
  let [classArray, setClass] = useState("");
  let [categoriesSliderShow, setCategoriesSliderShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollPixels = window.scrollY;
      if (scrollPixels > 70) {
        scrollHnadler();
      } else {
        clearScrollHandler();
      }
    });
  });

  const clearScrollHandler = () => {
    setClass((classArray = ""));
  };

  const scrollHnadler = () => {
    setClass((classArray = "rgb(20,20,20)"));
  };

  const mouseOverHandler = () => {
    console.log("MOUSE IN");
    setCategoriesSliderShow(true);
  };
  const mouseOutHandler = () => {
    console.log("MOUSE Out");
    setCategoriesSliderShow(false);
  };

  return (
    <div
      className={classes.Navigation}
      style={{
        backgroundColor: classArray,
        transition: "all 0.3s ease-in",
      }}
    >
      <img src={logo} alt="logo" />
      <ul>
        <li>Home</li>
        <li
          onMouseOver={() => mouseOverHandler()}
          onMouseOut={() => mouseOutHandler()}
        >
          Category
          <CategoriesSlider show={categoriesSliderShow} />
        </li>
        <li>Mylist</li>
      </ul>
      <div className={classes.Search}>
        <div>
          <FontAwesomeIcon icon={faSearch} size="1x" />
          <input type="text" name="search" />
        </div>
      </div>
    </div>
  );
}

export default Navigation;
