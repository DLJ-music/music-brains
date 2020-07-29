import React, { useState, useEffect } from 'react';
import Search from '../components/search/Search';
import ArtistList from '../components/artists/ArtistList';
import { getArtists } from '../services/MusicBrainz.js';
import { useArtists } from '../hooks/ArtistsHooks';
import { useSearch } from '../hooks/searchHook';


const MainContainer = () => {
  // useSearchHook
  const { searchQuery, handleChange, handleSearch } = useSearch();
  // useArtistList
  const { artists } = useArtists(searchQuery);
  return (
    <div>
      <Search handleChange={handleChange} handleSearch={handleSearch} />
      <ArtistList artists={artists}/>
    </div>
  );
};

export default MainContainer;
