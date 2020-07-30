import React from 'react';
import PropTypes from 'prop-types';

const ArtistIDDetail = ({ releases }) => {
  const releaseElement = releases.map(release => (
    <li key={release.id}>
      {
        release['cover-art-archive'].front
          ? <img src={`http://coverartarchive.org/release/${release.id}/front/`} alt={release.title}/>
          : <img src={'http://placekitten.com/100/100'} />
      }
      {release.date}
    </li>
  ));
  return (
    <ul>
      {releaseElement}
    </ul>
  );
};

ArtistIDDetail.propTypes = {
  releases: PropTypes.array.isRequired
};

export default ArtistIDDetail;
