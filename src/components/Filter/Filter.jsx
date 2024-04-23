import React from "react";
import style from "./filter.module.css";
import PropTypes from "prop-types";

const Filter = ({ changeHandler }) => {
  return (
    <div className={style.container}>
      <span>Find contacts by name</span>
      <input
        type="text"
        name="filter"
        onChange={changeHandler}
        className={style.filterInput}
      ></input>
    </div>
  );
};

Filter.propTypes = {
  changeHandler: PropTypes.func.isRequired,
};

export default Filter;