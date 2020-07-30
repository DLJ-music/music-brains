import { useState, useEffect } from 'react';

export const useSearch = (setSearchQuery, setOffset) => {

  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('query');
    if(!query) return;
    setSearchInput(query);
    setSearchQuery(query);
  }, []);
 
  //searchInput State
  const handleChange = ({ target }) => {
    setSearchInput(target.value);     
  };

  const handleSearch = () => {
    setSearchQuery(searchInput);
    setOffset(0);
  };
  return {
    searchInput,
    handleChange,
    handleSearch
  };
};

