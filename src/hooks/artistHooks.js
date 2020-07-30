import { useEffect, useState } from 'react';
import { getArtistByID } from '../services/MusicBrainz';



export const useArtist = id => {
  const [artistReleases, setArtistReleases] = useState([]); 
 
  useEffect(() => {
    getArtistByID(id)
      .then(({ releases }) => {
        console.log(releases);
        setArtistReleases(releases);
      });
  }, [id]);

  return {
    artistReleases,
  };

};
