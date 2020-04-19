import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import classes from "./Navigation.module.css";
import logo from "../../assets/logo/logo.png";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CategoriesSlider from "./CategoriesSlider/CategoriesSlider";

function Navigation(props) {
  let [classArray, setClass] = useState("");
  let [categoriesSliderShow, setCategoriesSliderShow] = useState(false);
  let [input, setInput] = useState("Please type the movie");
  let [searchToggle, setSearchToggle] = useState(false);
  let [searchDiv, setSearchDiv] = useState("");

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
    setCategoriesSliderShow(true);
  };
  const mouseOutHandler = () => {
    setCategoriesSliderShow(false);
  };

  const inputHanlder = (event) => {
    setInput(event.target.value);
  };

  const inputFocusInHandler = () => {
    setSearchToggle(true);
  };
  const inputFocusOutHandler = () => {
    setInput(" ");
    setSearchToggle(false);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const jsonFile = require("../../data/featured/movies.json");
    const jsonFileArray = Object.keys(jsonFile).map((key, value) => {
      return jsonFile[key];
    });
    const searchResault = jsonFileArray.filter((element) =>
      element.key.includes(input.toLowerCase())
    );
    // setSearchResault(searchResault);
    const searchDivLIST = searchResault.map((element) => (
      <li key={element.id}>{element.title}</li>
    ));
    setSearchDiv(searchDivLIST);
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
      <ul className={classes.NavigationUl}>
        <li className={classes.HomeNavigation}>
          <NavLink className={classes.NavLink} to="/">
            Home
          </NavLink>
        </li>
        <li
          onMouseOver={() => mouseOverHandler()}
          onMouseOut={() => mouseOutHandler()}
        >
          Category
          <CategoriesSlider show={categoriesSliderShow} />
        </li>
        <li className={classes.MyList}>
          <NavLink className={classes.NavLink} to="/mylist">
            <div className={classes.DivLeft}>MyList</div>{" "}
            {/* {props.myList === 0 ? null : ( */}
            <div
              className={classes.DivRight}
              style={{
                transition: "all 0.2s ",
                opacity: props.myList === 0 ? "0" : "1",
              }}
            >
              {props.myList}
            </div>
          </NavLink>
        </li>
      </ul>
      <div className={classes.Search}>
        <div className={classes.Input}>
          <FontAwesomeIcon icon={faSearch} size="1x" />
          <form onSubmit={submitHandler}>
            <input
              type="text"
              name="search"
              onFocus={inputFocusInHandler}
              onBlur={inputFocusOutHandler}
              onChange={inputHanlder}
            />
          </form>
        </div>
      </div>
      <div
        className={classes.SearchDiv}
        style={{
          transition: "all 0.4s",
          opacity: searchToggle ? "1" : "0",
          height: searchToggle ? "auto" : "0vh",
          pointerEvents: searchToggle ? "all" : "none",
        }}
      >
        <div className={classes.Triangle} />
        <ul>{searchDiv}</ul>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
  };
};

export default connect(mapStateToProps, null)(Navigation);
