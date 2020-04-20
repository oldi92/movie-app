import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import classes from "./Navigation.module.css";
import logo from "../../assets/logo/logo.png";
import {
  faSearch,
  faStar,
  faPlay,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CategoriesSlider from "./CategoriesSlider/CategoriesSlider";
import AddRemoveMyList from "../UI/AddRemoveMyList/AddRemoveMyList";
import * as actions from "../../store/action";

function Navigation(props) {
  let [classArray, setClass] = useState("");
  let [categoriesSliderShow, setCategoriesSliderShow] = useState(false);
  let [input, setInput] = useState("Please type the movie");
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

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSearchDivToggle(true);

    if (input.trim().length === 0) {
      return;
    }
    /**Search throw json array with input value*/
    const searchResault = props.jsonArray.filter((element) =>
      element.key.includes(input.toLowerCase())
    );

    /**We create the Search div */
    const searchDivLIST = searchResault.map((element) => (
      <li key={element.id}>
        <img src={element.img} alt="pictures" />

        <div className={classes.SearchDivParagraph}>
          <div style={{ display: "flex" }}>
            <div className={classes.SearchDivTitle}>{element.title}</div>
            <div className={classes.SearchDivRate}>
              <FontAwesomeIcon icon={faStar} size="1x" />
              {element.rate}
            </div>
          </div>
          <div className={classes.SearchDivBody}>{element.body}</div>
        </div>

        <button className={classes.SearchDivButton}>
          <FontAwesomeIcon
            icon={faPlay}
            size="1x"
            style={{ paddingRight: "0.5vw" }}
          />
          Play
        </button>

        <div className={classes.SearcDivAddRemoveMyList}>
          <AddRemoveMyList
            style={{ color: "red" }}
            title={element.title}
            body={element.body}
            image={element.img}
            duration={element.duration}
            rate={element.rate}
            category={element.category}
          />
        </div>
      </li>
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

      {/* Navigation Menu */}
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

      {/* Search div */}
      <div className={classes.Search}>
        <div className={classes.Input}>
          <div className={classes.FontAwesomeIcon}>
            <FontAwesomeIcon icon={faSearch} size="1x" />
          </div>
          <form onSubmit={submitHandler}>
            <input type="text" name="search" onChange={inputHanlder} />
          </form>
        </div>
      </div>

      <div
        className={classes.SearchDiv}
        style={{
          transition: "all 0.4s",
          opacity: props.searchDivToggle ? "1" : "0",
          height: props.searchDivToggle ? "auto" : "0vh",
          pointerEvents: props.searchDivToggle ? "all" : "none",
        }}
      >
        <div
          className={classes.SearchDivClose}
          onClick={() => props.onSearchDivToggle(false)}
        >
          <FontAwesomeIcon icon={faTimes} size="1x" />
        </div>
        <h2>Search Result</h2>
        <ul>{searchDiv.length > 0 ? searchDiv : <li>No Result Found</li>}</ul>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    searchDivToggle: state.searchDivToggle,
    jsonArray: state.jsonArray,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchDivToggle: (booleanToggle) =>
      dispatch(actions.searchDivToggle(booleanToggle)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
