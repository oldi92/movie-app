import React, { Component } from "react";
import { connect } from "react-redux";

import Featured from "../../components/Featured/Featured";
import Footer from "../../components/Footer/Footer";
import classes from "./Home.module.css";
import JsonConverter from "../../components/JsonConverter/JsonConverter";
import DropBox from "../../components/UI/DropBox/DropBox";
import * as actions from "../../store/action";

class Home extends Component {
  state = {
    dataState: [],
  };

  componentDidMount() {
    if (this.props.jsonArray.length === 0) {
      this.props.onJsonArrayConverter();
    }
    console.log("[HOME]");
  }

  render() {
    return (
      <div className={classes.Home}>
        <DropBox
          show={this.props.searchDivToggle}
          onClick={this.props.onSearchDivToggle}
        />
        <Featured movieName={"outlawKing"} />

        <div className={classes.CategoryTitle}>Actions</div>
        <ul className={classes.Categories}>
          <JsonConverter category={"action"} />
        </ul>

        <div className={classes.CategoryTitle}>Comedy</div>
        <ul className={classes.Categories}>
          <JsonConverter category={"comedy"} />
        </ul>

        <div className={classes.CategoryTitle}>Drama</div>
        <ul className={classes.Categories}>
          <JsonConverter category={"drama"} />
        </ul>

        <Featured movieName={"thePlatform"} />

        <div className={classes.CategoryTitle}>Drama</div>
        <ul className={classes.Categories}>
          <JsonConverter category={"thriller"} />
        </ul>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchDivToggle: state.searchDivToggle,
    jsonArray: state.jsonArray,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchDivToggle: () => dispatch(actions.searchDivToggle()),
    onJsonArrayConverter: () => dispatch(actions.jsonArrayConverter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
