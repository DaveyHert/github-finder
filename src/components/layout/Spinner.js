import React from "react";
import { Fragment } from "react";
import spinner from "./spinner.gif";

const Spinner = () => (
  <Fragment>
    <img src={spinner} alt='spinner' style={spinnerStyle} />;
  </Fragment>
);

export default Spinner;

const spinnerStyle = {
  width: "100px",
  display: "block",
  margin: "auto",
};
