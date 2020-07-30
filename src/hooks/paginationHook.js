import { useEffect, useState } from 'react';

export const usePagination = () => {
  const [page, setPage] = useState(0);
  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(0);
  const [limit, setLimit] = useState(25);

  const totalPages = Math.ceil(count / limit);
  const currentPage = Math.floor((offset / limit) + 1);
  
  const previousPage = () => {
    if(offset < limit) {
      setPage(1);
      setOffset(0);
    }
    if(offset >= limit) {
      setPage(page => page - 1);
      setOffset(offset => offset - limit);
    }
  };

  const nextPage = () => {
    if((count - offset) < limit) return;
    setPage(page => page + 1);
    setOffset(offset => offset + limit);
  };

  return {
    page,
    offset,
    previousPage,
    nextPage,
    setOffset,
    setCount,
    currentPage
  };
};
