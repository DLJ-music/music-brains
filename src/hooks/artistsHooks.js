import { useEffect, useState } from 'react';
import { getArtists } from '../services/MusicBrainz.js';
import { useHistory, useLocation } from 'react-router-dom';

export const useArtists = () => {
  const history = useHistory();
  const location = useLocation();
  const [artists, setArtists] = useState([]);
  const [count, setCount] = useState(0);
  const [offset, setOffset] = useState(null);
  const [limit, setLimit] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState(null);

  useEffect(() => {
    
    // const location = useHistory();
    // fetch initial data, no search params
    // const searchQuery = new URLSearchParams((location.search).get(searchQuery) || searchQuery);
    // setArtists to the received data
    const params = new URLSearchParams(location.search);

    if(searchQuery === null && params.get('query')) setSearchQuery(params.get('query'));
    if(!searchQuery) return;
    if(offset === null && params.get('offset')) setOffset(Number(params.get('offset')));
    if(!params.get('offset')) history.push(`?query=${searchQuery}&offset=0`);

    setLoading(true);

    getArtists(searchQuery, offset || 0)
      .then(({ offset, count, artists }) => {
        history.push(`?query=${searchQuery}&offset=${offset}`);
        setArtists(artists);
        setCount(count);
        setCurrentPage(Math.ceil(offset / limit) + 1);
      })
      .catch(err => {
        console.log('query: ' + searchQuery + ',', 'offset: ' + offset + ',', 'error: ' + err);
        if(params.get('offset') !== offset) setOffset(Number(params.get('offset')));
      })
      .finally(() => setLoading(false));
  }, [offset, searchQuery]);

  return {
    artists,
    limit,
    count,
    offset,
    setOffset,
    currentPage,
    loading,
    setSearchQuery
  };
};
