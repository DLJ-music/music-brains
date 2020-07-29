import { useState } from 'react';

export const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchInput, setSearchInput] = useState('');
 
  //searchInput State
  const handleChange = ({ target }) => {
    setSearchInput(target.value);    
  };
  const handleSearch = () => {
    setSearchQuery(searchInput);
  };
  return {
    searchQuery,
    handleChange,
    handleSearch, 
    searchInput
  };
};

