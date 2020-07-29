import { useEffect, useState } from 'react';
import { getArtists } from '../services/MusicBrainz.js';

export const useArtists = (searchQuery) => {

  const [artists, setArtists] = useState([]);
  useEffect(() => {
    // fetch initial data, no search params
    // setArtists to the received data
    if(searchQuery === '') return;
    getArtists(searchQuery)
      .then(({ artists }) => {
        setArtists(artists);
      });
  }, [searchQuery]);

  return {
    artists
  };
};
