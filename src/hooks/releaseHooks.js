import { useEffect, useState } from 'react';
import { getReleaseByID } from '../services/MusicBrainz.js';

export const useRelease = id => {
  const [recordings, setRecordings] = useState([]);
  const [loading, setLoading] = useState('');

  useEffect(() => {
    setLoading(true);
    getReleaseByID(id)
      .then(({ recordings }) => {
        if(!recordings) setTimeout(() => {
          history.go(-1); 
        }, 1500);
        setRecordings(recordings);
      })
      .finally(() => setLoading(false));
  }, [id]);

  return {
    recordings,
    loading
  };

};
