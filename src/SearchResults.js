import React from 'react';
import PropTypes from 'prop-types';

import './search-results.css';

const SearchResults = ({ superheros, input }) => (
  <div className="search-results inner">
    <h3 className="not-found">Oh no!</h3>
    <p className="not-found">No results found for "{input}" </p>
  </div>
);

SearchResults.prototype = {
  superheros: PropTypes.array.isRequired,
  input: PropTypes.string.isRequired,
};

export default SearchResults;
