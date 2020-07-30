import React from 'react';
import PropTypes from 'prop-types';

const Artist = ({ name, id, type, score }) => {
  return (
    <>
      <h1 id={id}>{name}</h1>
      {type && <h2>{type}</h2>}
      {score && <h2>{score}</h2>}
    </>
  );
};

Artist.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  score: PropTypes.number
};

export default Artist;

