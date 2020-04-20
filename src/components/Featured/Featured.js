import React, { Component } from "react";
import { connect } from "react-redux";

import featured from "../../data/featured.json";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Modal from "../UI/Modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import classes from "./Featured.module.css";
import InfoButton from "../UI/InfoButton/InfoButton";
import * as actions from "../../store/action";

class Featured extends Component {
  state = {
    dataState: [],
    modalDiv: [],
    modalShow: false,
  };

  componentDidMount() {
    console.log("[FEATURED]");
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
        onClickModal={() => this.modalHandler()}
        show={this.props.modalToggle}
        title={title}
        trailer={trailer}
        rate={rate}
        duration={duration}
        body={body}
        category={category}
        image={image}
      />
    );
    this.props.onModalToggle();
    this.setState({
      modalDiv: copyModalDiv,
    });
  };

  render() {
    // Creating the fetured div with loop chosing the money Heist movie
    let copyfeaturedDiv = [];
    let featuredDiv = "";
    const copyData = this.state.dataState;
    copyfeaturedDiv = copyData.filter(
      (element) => element.key === this.props.movieName
    );
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
          <div className={classes.Title}>{element.title}</div>
          <p className={classes.Paragraph}>{element.body}</p>
          <button className={classes.FeaturedButton}>
            <FontAwesomeIcon icon={faPlay} size="1x" /> Play
          </button>
          <InfoButton
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
          />
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

const mapStateToProps = (state) => {
  return {
    modalToggle: state.modalToggle,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onModalToggle: () => dispatch(actions.modalToggle()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Featured);
