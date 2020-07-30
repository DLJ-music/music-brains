import React from 'react';
import Search from '../components/search/Search';
import Pagination from '../components/pagination/Pagination';
import ArtistList from '../components/artists/ArtistList';
import { useArtists } from '../hooks/ArtistsHooks';
import { useSearch } from '../hooks/searchHook';
import { usePagination } from '../hooks/paginationHook';
import { useLocation } from 'react-router-dom';



const MainContainer = () => {
  // usePagination
  // const location = useLocation();
  // console.log(location);
  
  const { previousPage, nextPage, offset, setOffset, setCount, currentPage } = usePagination();
 
  // useSearchHook
  const { searchQuery, searchInput, handleChange, handleSearch } = useSearch(setOffset);

  // useArtistList
  const { artists } = useArtists(searchQuery, offset, setOffset, setCount);


  return (
    <div>
      <Search searchInput={searchInput} handleChange={handleChange} handleSearch={handleSearch} />
      <Pagination previousPage={previousPage} nextPage={nextPage} page={currentPage} />
      <ArtistList artists={artists}/>
    </div>
  );
};

export default MainContainer;
