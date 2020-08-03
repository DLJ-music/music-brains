import React from 'react';
import PropTypes from 'prop-types';

const Lyrics = ({ lyrics }) => {
  return (
    <>
      {lyrics}
    </>
  );
};

Lyrics.propTypes = {
  lyrics: PropTypes.string.isRequired
};

export default Lyrics;
