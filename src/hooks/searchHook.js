import { useState } from 'react';

export const useSearch = (setOffset) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchInput, setSearchInput] = useState('');
 
  //searchInput State
  const handleChange = ({ target }) => {
    setSearchInput(target.value);    
  };
  const handleSearch = () => {
    setSearchQuery(searchInput);
    setOffset(0);
  };
  return {
    searchQuery,
    handleChange,
    handleSearch, 
    searchInput
  };
};

