export const usePagination = (offset, limit, count, setOffset) => {

  const previousPage = () => {
    if(offset < limit && offset !== 0) {
      setOffset(0);
    }
    if(offset >= limit) {
      setOffset(offset => offset - limit);
    }
  };

  const nextPage = () => {
    if((count - offset) < limit) return;
    setOffset(offset => offset + limit);
  };

  return {
    previousPage,
    nextPage
  };
};
