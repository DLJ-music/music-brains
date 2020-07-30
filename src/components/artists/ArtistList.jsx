import React from 'react';
import Artist from './Artist.jsx';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ArtistList = ({ artists }) => {
  const artistElements = artists.map(artist => (
    <Link key={artist.id} to={`/artist/${artist.id}`} >
      <li key={artist.id}>
        <Artist {...artist}/>
      </li>
    </Link>
  ));
  return (
    <ul>
      {artistElements}
    </ul>
  );
};

ArtistList.propTypes = {
  artists: PropTypes.array.isRequired
};

export default ArtistList;

