import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ loading, previousPage, nextPage, page }) => {
  return (
    <section>
      <button disabled={loading} onClick={previousPage}>Previous</button>
      <span style={{ margin: '0 10px' }}>{page}</span>
      <button disabled={loading} onClick={nextPage}>Next</button>
    </section>
  );
};

Pagination.propTypes = {
  page: PropTypes.number,
  previousPage: PropTypes.func,
  nextPage: PropTypes.func,
  loading: PropTypes.bool
};

export default Pagination;

