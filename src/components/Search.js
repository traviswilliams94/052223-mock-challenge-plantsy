import React from "react";

function Search({searchState, setSearchState, handleSearch}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearch}
        value={searchState}
      />
    </div>
  );
}

export default Search;
