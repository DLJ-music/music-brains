import React from 'react';
import Search from '../components/search/Search';
import Pagination from '../components/pagination/Pagination';
import ArtistList from '../components/artists/ArtistList';
import { useArtists } from '../hooks/artistsHooks';
import { useSearch } from '../hooks/searchHook';
import { usePagination } from '../hooks/paginationHook';
// import { useLocation } from 'react-router-dom';



const MainContainer = () => {

  // useArtistList
  const { artists, limit, count, offset, setOffset, currentPage, loading, setSearchQuery } = useArtists();

  // useSearchHook
  const { searchInput, handleChange, handleSearch } = useSearch(setSearchQuery, setOffset);

  // usePagination
  const { previousPage, nextPage } = usePagination(offset, limit, count, setOffset);

  return (
    <div>
      {/* <SearchProvider value={}> */}
      <Search loading={loading} searchInput={searchInput} handleChange={handleChange} handleSearch={handleSearch} />
      <Pagination loading={loading} previousPage={previousPage} nextPage={nextPage} page={currentPage} />
      <ArtistList artists={artists}/>
      {/* </SearchProvider> */}
    </div>
  );
};

export default MainContainer;
