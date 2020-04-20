import React from "react";

import classes from "./CategoryList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import AddRemoveMyList from "../../../components/UI/AddRemoveMyList/AddRemoveMyList";
import InfoButton from "../../../components/UI/InfoButton/InfoButton";

const CategoryList = (props) => {
  return (
    <div className={classes.CategoryList}>
      <img src={props.image} alt="Category List images" />
      <div className={classes.Paragraph}>
        <h3>{props.title}</h3>
        <p>{props.body}</p>
        <div>
          <button className={classes.CategoryListButton}>
            <FontAwesomeIcon
              icon={faPlay}
              size="1x"
              style={{ paddingRight: "0.5vw" }}
            />
            Play
          </button>
          <InfoButton onClick={props.onClick} />
          <AddRemoveMyList
            title={props.title}
            body={props.body}
            image={props.image}
            duration={props.duration}
            category={props.category}
            rate={props.rate}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
