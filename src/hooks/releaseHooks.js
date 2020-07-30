import { useEffect, useState } from 'react';
import { getReleaseByID } from '../services/MusicBrainz.js';

export const useRelease = id => {
  const [recordings, setRecordings] = useState([]);

  useEffect(() => {
    getReleaseByID(id)
      .then(({ recordings }) => {
        setRecordings(recordings);
      });
  }, [id]);

  return {
    recordings
  };

};
