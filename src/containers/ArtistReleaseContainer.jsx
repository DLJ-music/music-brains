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

  return (
    <>
      <Pagination loading={loading} previousPage={previousPage} nextPage={nextPage} page={currentPage} />
      <ArtistIDDetail releases={artistReleases} name={name} />
    </>
  );
};

export default ArtistReleaseContainer;
