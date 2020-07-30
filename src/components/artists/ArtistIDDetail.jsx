import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ArtistIDDetail = ({ releases, name }) => {
  const releaseElement = releases.map(release => (
    <Link key={release.id} to={`/release/${release.id}/${name}`} >

      <li key={release.id}>
        <figure >
          {
            release['cover-art-archive'].front
              ? <img src={`http://coverartarchive.org/release/${release.id}/front/`} alt={release.title}/>
              : <img src={'http://placekitten.com/100/100'} />
          }
          <figcaption >
            {release.date}<br />{release.title}
          </figcaption>
        </figure>
      </li>
    </Link>
  ));
  return (
    <ul>
      {releaseElement}
    </ul>
  );
};

ArtistIDDetail.propTypes = {
  releases: PropTypes.array.isRequired,
  name: PropTypes.string
};

export default ArtistIDDetail;
