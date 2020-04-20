import React, { Component } from "react";

import CategoriesPreview from "./CategoriesPreview/CategoriesPreview";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Modal from "../UI/Modal/Modal";
import { connect } from "react-redux";

class JsonConverter extends Component {
  state = {
    modalDiv: "",
    modalShow: false,
  };

  componentDidMount() {
    console.log("[CATEGORY PREVIEW]");
  }

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
    const actionMoviesFilter = this.props.jsonArray.filter(
      (element) => element.category === this.props.category
    );

    let categoryActionMovies = actionMoviesFilter.map((element, i) => {
      return (
        <CategoriesPreview
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
          key={i}
          title={element.title}
          image={element.img}
          body={element.body}
          duration={element.duration}
          category={element.category}
          rate={element.rate}
        />
      );
    });

    return (
      <Auxiliary>
        {this.state.modalDiv}
        {categoryActionMovies}
      </Auxiliary>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    jsonArray: state.jsonArray,
  };
};

export default connect(mapStateToProps, null)(JsonConverter);
