import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './ArtistIDDetail.css';


const ArtistIDDetail = ({ releases, name }) => {
  const test = Math.ceil(200 + Math.random() * 10);
  const releaseElement = releases.map(release => (
    <Link key={release.id} to={`/release/${release.id}/${name}`} >

      <li className={styles.ArtistIDDetail} key={release.id}>
        <figure >
          {
            release['cover-art-archive'].front
              ? <img src={`http://coverartarchive.org/release/${release.id}/front/`} alt={release.title}/>
              : <img src={`http://placekitten.com/${test}/${test}`} />
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
