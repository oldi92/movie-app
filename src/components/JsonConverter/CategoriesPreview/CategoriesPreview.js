import React from "react";

import classes from "./CategoriesPreview.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import AddRemoveMyList from "../../UI/AddRemoveMyList/AddRemoveMyList";
import InfoButton from "../../UI/InfoButton/InfoButton";

const Categories = (props) => {
  return (
    <li className={classes.Categories}>
      <img src={props.image} alt="actions Images" />
      <div className={classes.Paragraph}>
        <h3>{props.title}</h3>
        <p>{props.body}</p>
        <div>
          <button className={classes.Buttons}>
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
    </li>
  );
};

export default Categories;
