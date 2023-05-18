import React from "react";

function SearchBar({updateSearchText, searchText}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Traveler:</label>
      <input type="text" placeholder="The flame flickers..." className="searchTerm" onChange={updateSearchText}
      value={searchText}
      />
    </div>
  );
}

export default SearchBar;