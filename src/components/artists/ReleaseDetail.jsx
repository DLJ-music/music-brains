import React from 'react';
import PropTypes from 'prop-types';

const ReleaseDetail = ({ recordings }) => {

  const songElement = recordings.map(song => (
    <li key={song.id} >
      {song.title}
    </li>
  ));

  return (
    <ul>
      {songElement}
    </ul>
  );

};
ReleaseDetail.propTypes = {
  recordings: PropTypes.array.isRequired
};

export default ReleaseDetail;
