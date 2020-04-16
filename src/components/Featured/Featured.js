import React, { Component } from "react";

import featured from "../../data/featured/featured.json";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Modal from "../UI/Modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faInfo } from "@fortawesome/free-solid-svg-icons";
import classes from "./Featured.module.css";

class Featured extends Component {
  state = {
    dataState: [],
    modalDiv: [],
    modalShow: false,
  };

  componentDidMount() {
    this.featuredHanlder();
  }

  featuredHanlder = () => {
    // make my featured.json files into array so we can use the array later
    const data = Object.keys(featured).map((key, value) => {
      return featured[key];
    });
    const copyData = [...data];
    this.setState({ dataState: copyData });
  };

  modalHandler = (title, trailer, rate, duration, body, category, image) => {
    const copyModalDiv = (
      <Modal
        show={this.state.modalShow}
        onClickModal={() => this.modalHandler()}
        title={title}
        trailer={trailer}
        rate={rate}
        duration={duration}
        body={body}
        category={category}
        image={image}
      />
    );

    this.setState({
      modalShow: !this.state.modalShow,
      modalDiv: copyModalDiv,
    });
  };

  render() {
    // Creating the fetured div with loop chosing the money Hesi movie
    let copyfeaturedDiv = [];
    let featuredDiv = "";
    const copyData = this.state.dataState;
    copyfeaturedDiv = copyData.filter(
      (element) => element.key === this.props.movieName
    );
    console.log(copyData);
    copyfeaturedDiv.map((element) => {
      return (featuredDiv = (
        <div
          className={classes.Featured}
          style={{
            backgroundImage: `url(${element.img})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          {/* <img src={element.img} alt='Featured images' /> */}
          <div className={classes.Title}>{element.title}</div>
          <p className={classes.Paragraph}>{element.body}</p>
          <button>
            <FontAwesomeIcon icon={faPlay} size="1x" /> Play
          </button>
          <button
            onClick={() =>
              this.modalHandler(
                element.title, //passing props for modal component
                element.trailer,
                element.rate,
                element.duration,
                element.body,
                element.category,
                element.img
              )
            }
          >
            <FontAwesomeIcon
              icon={faInfo}
              size="1x"
              style={{ paddingRight: "0.5vw" }}
            />
            Info
          </button>
        </div>
      ));
    });

    return (
      <Auxiliary>
        {this.state.modalDiv}
        {featuredDiv}
      </Auxiliary>
    );
  }
}

export default Featured;
