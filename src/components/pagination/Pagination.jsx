import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ previousPage, nextPage, page }) => {
  return (
    <section>
      <button onClick={previousPage}>Previous</button>
      <span style={{ margin: '0 10px' }}>{page}</span>
      <button onClick={nextPage}>Next</button>
    </section>
  );
};

Pagination.propTypes = {
  page: PropTypes.number,
  previousPage: PropTypes.func,
  nextPage: PropTypes.func
};

export default Pagination;

