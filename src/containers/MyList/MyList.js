import React, { Component } from "react";
import { connect } from "react-redux";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Footer from "../../components/Footer/Footer";

import classes from "./MyList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTimes } from "@fortawesome/free-solid-svg-icons";
import * as actions from "../../store/action";
import DropBox from "../../components/UI/DropBox/DropBox";

class MyList extends Component {
  componentDidMount() {
    console.log("[MYLIST]");
  }
  render() {
    let myListDiv = [];
    if (this.props.myListMovies.length === 0) {
      myListDiv = null;
      // <li className={classes.MyListEmpty}>Your List is Empty . . .</li>
    } else {
      myListDiv = this.props.myListMovies.map((element) => (
        <li key={element.image}>
          <div
            onClick={() => this.props.onRemoveMyList(element.title)}
            className={classes.RemoveList}
          >
            <div className={classes.RemoveX}>
              <FontAwesomeIcon icon={faTimes} size="1x" />
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <div className={classes.Title}>{element.title}</div>
            <div
              style={{ display: "flex", marginTop: "1vw", marginLeft: "1vw" }}
            >
              <FontAwesomeIcon icon={faStar} size="1x" />
              <div className={classes.Rate}>{element.rate}</div>
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <div className={classes.Category}>{element.category},</div>
            <div className={classes.Duration}>{element.duration}</div>
          </div>

          <div style={{ display: "flex" }}>
            <img src={element.image} alt="Movie pictures" />
            <div className={classes.Body}>
              <div>{element.body}</div>
              <button>Play Now</button>
            </div>
          </div>
        </li>
      ));
    }
    console.log(this.props.myListMovies);
    console.log(this.props.myListMovies.length);
    return (
      <Auxiliary>
        <DropBox
          show={this.props.searchDivToggle}
          onClick={this.props.onSearchDivToggle}
        />
        {this.props.myListMovies.length > 0 ? (
          <ul className={classes.MyList}>{myListDiv}</ul>
        ) : (
          <div className={classes.MyList}>
            <div style={{ height: "73vh" }}>
              <div className={classes.MyListEmpty}>
                Your List is Empty . . .
              </div>
            </div>
          </div>
        )}
        {this.props.myListMovies.length === 1 ||
        this.props.myListMovies.length === 2 ? (
          <div style={{ height: "45vh" }} />
        ) : null}
        <Footer />
      </Auxiliary>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    myListMovies: state.myListMovies,
    searchDivToggle: state.searchDivToggle,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveMyList: (title) => dispatch(actions.removeMyList(title)),
    onSearchDivToggle: () => dispatch(actions.searchDivToggle()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MyList);
