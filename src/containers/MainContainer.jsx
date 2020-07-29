import React from 'react';
import Search from '../components/search/Search';
import ArtistList from '../components/artists/ArtistList';
import { useArtists } from '../hooks/ArtistsHooks';
import { useSearch } from '../hooks/searchHook';


const MainContainer = () => {
  // useSearchHook
  const { searchQuery, searchInput, handleChange, handleSearch } = useSearch();
  // useArtistList
  const { artists } = useArtists(searchQuery);
  return (
    <div>
      <Search searchInput={searchInput} handleChange={handleChange} handleSearch={handleSearch} />
      <ArtistList artists={artists}/>
    </div>
  );
};

export default MainContainer;
