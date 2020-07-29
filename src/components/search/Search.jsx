import React from 'react'
import PropTypes from 'prop-types'

const Search = ({ handleChange, handleSearch }) => {
  return (
    <>
      <input onChange={handleChange}></input>
      <button onClick={handleSearch}>Search</button>
    </>
  )
}

Search.propTypes = {
  handleChange: PropTypes.func,
  handleSearch: PropTypes.func
}

export default Search

