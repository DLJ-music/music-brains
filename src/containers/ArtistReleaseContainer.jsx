import React from 'react';
import { useArtist } from '../hooks/artistHooks';
import ArtistIDDetail from '../components/artists/ArtistIDDetail';
import { useParams } from 'react-router-dom';


const ArtistReleaseContainer = () => {
  const { id, name } = useParams();

  

  const { artistReleases } = useArtist(id);
  return (
    <>

      <ArtistIDDetail releases={artistReleases} name={name} />
    </>
  );
};

export default ArtistReleaseContainer;
