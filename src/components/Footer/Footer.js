import React from "react";

import { NavLink } from "react-router-dom";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.Footer}>
      <div className={classes.Main}>
        <ul className={classes.FooterNav}>
          <li>
            <NavLink className={classes.NavLink} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={classes.NavLink} to="/mylist">
              MyList
            </NavLink>
          </li>
          <li>Contact Us</li>
          <li>Terms of Use</li>
        </ul>
      </div>
      <div className={classes.Copyright}>© 2020 Movies.com Rights Reserved</div>
    </div>
  );
};

export default Footer;
