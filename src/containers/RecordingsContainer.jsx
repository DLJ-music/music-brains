import React from 'react';
import { useParams } from 'react-router-dom';
import ReleaseDetail from '../components/artists/ReleaseDetail';
import { useRelease } from '../hooks/releaseHooks.js';


const RecordingsContainer = () => {
  const { id, name } = useParams();

  const { recordings, loading } = useRelease(id);
 
  //loading animation 
  if(loading) return <div style={{ display: 'flex', WebkitJustifyContent: 'center' }}>
    <img src='/loading.gif' alt="loading"/>;
  </div>;
  if(!recordings) return <section>
    <div style={{ display: 'flex', WebkitJustifyContent: 'center' }}>
      <h2>Opps you found a broken link...</h2>
    </div>
    <div style={{ display: 'flex', WebkitJustifyContent: 'center' }}>
      <img style={{ width:'25%' }} src='/broken.png' alt="broken link" />
    </div>
  </section>;

  return (
    <>
      <ReleaseDetail recordings={recordings} name={name} /> 
    </>
  );
};


export default RecordingsContainer;
