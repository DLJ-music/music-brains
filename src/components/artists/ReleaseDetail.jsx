import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ReleaseDetail = ({ recordings, name }) => {

  const songElement = recordings.map(song => (
    <Link key={song.id} to={`/lyrics/${name}/${song.title}`} >

      <li key={song.id} >
        {song.title}
      </li>
    </Link>
  ));

  return (
    <ul>
      {songElement}
    </ul>
  );

};
ReleaseDetail.propTypes = {
  recordings: PropTypes.array.isRequired,
  name: PropTypes.string
};

export default ReleaseDetail;
