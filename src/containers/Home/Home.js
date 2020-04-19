import React, { Component } from "react";

import Featured from "../../components/Featured/Featured";
import Footer from "../../components/Footer/Footer";
import classes from "./Home.module.css";
import JsonConverter from "../../components/JsonConverter/JsonConverter";

class Home extends Component {
  state = {
    dataState: [],
  };

  render() {
    return (
      <div className={classes.Home}>
        <Featured movieName={"moneyHeist"} />

        <div className={classes.CategoryTitle}>Actions</div>
        <ul className={classes.Categories}>
          <JsonConverter jsonFile={"movies"} category={"action"} />
        </ul>

        <div className={classes.CategoryTitle}>Comedy</div>
        <ul className={classes.Categories}>
          <JsonConverter jsonFile={"movies"} category={"comedy"} />
        </ul>

        <div className={classes.CategoryTitle}>Drama</div>
        <ul className={classes.Categories}>
          <JsonConverter jsonFile={"movies"} category={"drama"} />
        </ul>

        <Featured movieName={"thePlatform"} />

        <div className={classes.CategoryTitle}>Drama</div>
        <ul className={classes.Categories}>
          <JsonConverter jsonFile={"movies"} category={"thriller"} />
        </ul>

        <Footer />
      </div>
    );
  }
}

export default Home;
