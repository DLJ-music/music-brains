import { useEffect, useState } from 'react';
import { getArtists } from '../services/MusicBrainz.js';
// import { useLocation, useHistory } from 'react-router-dom';

export const useArtists = (searchQuery, newOffset, setOffset, setCount) => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    
    // const location = useHistory();
    // fetch initial data, no search params
    // const searchQuery = new URLSearchParams((location.search).get(searchQuery) || searchQuery);
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
