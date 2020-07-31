import React from 'react';
import { useArtist } from '../hooks/artistHooks';
import ArtistIDDetail from '../components/artists/ArtistIDDetail';
import Pagination from '../components/pagination/Pagination';
import { useParams } from 'react-router-dom';
import { usePagination } from '../hooks/paginationHook';


const ArtistReleaseContainer = () => {
  const { id, name } = useParams();

  const { artistReleases, offset, limit, count, setOffset, loading, currentPage } = useArtist(id);

  // usePagination
  const { previousPage, nextPage } = usePagination(offset, limit, count, setOffset);
  
  //loading animation 
  if(loading) return <div style={{ display: 'flex', WebkitJustifyContent: 'center' }}>
    <img src='/loading.gif' alt="loading"/>
  </div>;

  if(!artistReleases) return <section>
    <div style={{ display: 'flex', WebkitJustifyContent: 'center' }}>
      <h2>Opps you found a broken link...</h2>
    </div>
    <div style={{ display: 'flex', WebkitJustifyContent: 'center' }}>
      <img style={{ width:'25%' }} src='/broken.png' alt="broken link" />
    </div>
  </section>;
  
  return (
    <>
      <Pagination loading={loading} previousPage={previousPage} nextPage={nextPage} page={currentPage} />
      <ArtistIDDetail releases={artistReleases} name={name} />
    </>
  );
};

export default ArtistReleaseContainer;

