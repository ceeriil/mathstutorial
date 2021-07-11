import React from "react";
import "../App.css";


const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className="searchbox">
      <input
        type="search"
        placeholder="search topics"
        
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
