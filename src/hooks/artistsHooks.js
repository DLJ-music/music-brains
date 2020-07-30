import { useEffect, useState } from 'react';
import { getArtists } from '../services/MusicBrainz.js';

export const useArtists = (searchQuery, newOffset, setOffset, setCount) => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    // fetch initial data, no search params
    // setArtists to the received data
    if(searchQuery === '') return;
    getArtists(searchQuery, newOffset)
      .then(({ count, offset, artists }) => {
        setArtists(artists);
        if(newOffset !== offset) setOffset(offset);
        setCount(count);
      });
  }, [searchQuery, newOffset]);

  return {
    artists
  };
};
