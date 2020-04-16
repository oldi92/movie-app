import React from "react";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.Footer}>
      <div className={classes.Main}>
        <ul className={classes.FooterNav}>
          <li>Home</li>
          <li>Mylist</li>
          <li>Contact Us</li>
          <li>Terms of Use</li>
        </ul>
      </div>
      <div className={classes.Copyright}>© 2020 Movies.com Rights Reserved</div>
    </div>
  );
};

export default Footer;
