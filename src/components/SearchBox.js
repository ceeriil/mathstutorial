import React from "react";
import "../App.css";

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className="searchbox">
      <input type="search" placeholder="search topics" />
    </div>
  );
};

export default SearchBox;
