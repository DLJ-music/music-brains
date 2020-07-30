import React from 'react';
import { useParams } from 'react-router-dom';
import ReleaseDetail from '../components/artists/ReleaseDetail';
import { useRelease } from '../hooks/releaseHooks.js';


const RecordingsContainer = () => {
  const { id, name } = useParams();

  const { recordings } = useRelease(id);
    
  return (
    <>
      <ReleaseDetail recordings={recordings} name={name} /> 
    </>
  );
};


export default RecordingsContainer;
