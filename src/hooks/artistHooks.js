import { useEffect, useState } from 'react';
import { getArtistByID } from '../services/MusicBrainz';
import { useHistory, useLocation } from 'react-router-dom';

export const useArtist = id => {
  const history = useHistory();
  const location = useLocation();
  const [artistReleases, setArtistReleases] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [offset, setOffset] = useState(null);
  const [limit, setLimit] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);
 
  useEffect(() => {
    const params = new URLSearchParams(location.search);

    if(offset === null && params.get('offset')) setOffset(Number(params.get('offset')));
    if(!params.get('offset')) history.push('?offset=0');

    setLoading(true);

    getArtistByID(id, offset || 0)
      .then(({ 'release-count': releaseCount, 'release-offset': releaseOffset, releases }) => {
        history.push(`?offset=${offset}`);
        // console.log('====================', releaseCount);
        setArtistReleases(releases, offset);
        setCount(releaseCount);
        setCurrentPage(Math.ceil(releaseOffset / limit) + 1);
      })
      .finally(() => setLoading(false));
  }, [offset, id]);

  return {
    artistReleases,
    loading,
    offset,
    limit,
    count,
    setOffset,
    currentPage
  };

};
