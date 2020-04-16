import React, { Component } from "react";

import Categories from "../Categories/Categories";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Modal from "../UI/Modal/Modal";

class JsonConverter extends Component {
  state = {
    modalDiv: "",
    modalShow: false,
    movieArray: [],
    movieCategory: this.props.jsonFile,
  };

  componentDidMount() {
    this.jsonFileFunction();
  }

  jsonFileFunction = () => {
    const jsonFile = require(`../../data/featured/${this.state.movieCategory}.json`);
    const jsonFileArray = Object.keys(jsonFile).map((key, value) => {
      return jsonFile[key];
    });
    const copyMoviesArray = [...jsonFileArray];
    this.setState({ movieArray: copyMoviesArray });
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
    const actionMoviesFilter = this.state.movieArray.filter(
      (element) => element.category === this.props.category
    );

    let categoryActionMovies = actionMoviesFilter.map((element, i) => {
      return (
        <Categories
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

export default JsonConverter;
