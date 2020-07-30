import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchInput, handleChange, handleSearch }) => {
  return (
    <>
      <input type='text' value={searchInput} onChange={handleChange}></input>
      <button onClick={handleSearch}>Search</button>
    </>
  );
};

Search.propTypes = {
  handleChange: PropTypes.func,
  handleSearch: PropTypes.func,
  searchInput: PropTypes.string
};

export default Search;

