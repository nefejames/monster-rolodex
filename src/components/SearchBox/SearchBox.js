import React from "react";
import "./SearchBox.css";

const SearchBox = ({ handleChange }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder="search monsters"
      onChange={handleChange}
    />
  );
};

export default SearchBox;
