import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./Category.module.css";
import CategoryList from "./CategoryList/CategoryList";
import Footer from "../../components/Footer/Footer";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Modal from "../../components/UI/Modal/Modal";
import Featured from "../../components/Featured/Featured";

class Category extends Component {
  state = {
    filteredArray: [],
    modalShow: false,
    modalDiv: [],
    featured: ["moneyHeist", "loveWeddingReapeat", "thePlatform", "outlawKing"],
    randomFeaturedMovie: "",
  };
  componentDidMount() {
    this.movieArrayFilter();
    console.log("[CATEGORY]");
  }
  componentDidUpdate() {
    if (!this.props.category) {
      return this.props.history.push("/");
    }

    const copyArray = [...this.state.filteredArray];
    const filterArray = copyArray.map((element) => element.category);
    if (filterArray[0] !== this.props.category) {
      this.movieArrayFilter();
    }
  }

  randomFeaturedMovieGenerator = () => {
    console.log("RANDOM MOVIE NAME GENERATOR");

    let copyfeatured = [...this.state.featured];
    let singlecopyfeatured =
      copyfeatured[Math.floor(Math.random() * copyfeatured.length)];
    this.setState({ randomFeaturedMovie: singlecopyfeatured });
    console.log(singlecopyfeatured);
  };

  movieArrayFilter = () => {
    const copyMoviesFilter = this.props.jsonArray.filter(
      (element) => element.category === this.props.category
    );
    this.setState({ filteredArray: copyMoviesFilter });
    this.randomFeaturedMovieGenerator();
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
    let categoryDiv = this.state.filteredArray.map((element) => (
      <CategoryList
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
        key={element.id}
        image={element.img}
        title={element.title}
        duration={element.duration}
        rate={element.rate}
        category={element.category}
        body={element.body}
      />
    ));

    return (
      <Auxiliary>
        {this.state.modalDiv}
        <Featured movieName={this.state.randomFeaturedMovie} />
        <div className={classes.CategoryContainer}>
          <div className={classes.Title}>
            {this.props.category.charAt(0).toUpperCase() +
              this.props.category.slice(1)}
          </div>
          <div className={classes.Category}>{categoryDiv}</div>
          <Footer />
        </div>
      </Auxiliary>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    category: state.category,
    jsonArray: state.jsonArray,
  };
};

export default connect(mapStateToProps, null)(Category);
