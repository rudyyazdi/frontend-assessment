import React from 'react';
import PropTypes from 'prop-types';

import './search-results.scss';
import SearchResultsRow from './SearchResultsRow';

const SearchResults = ({ superheroes, input }) => {
  const content = (superheroes.length > 0)
    ? superheroes.map(s => <SearchResultsRow {...s} key={s.id} />)
    : <>
      <h3 className="not-found">Oh no!</h3>
      <p className="not-found">No results found for &quot;{input}&quot; </p>
    </>;

  return <div className="search-results inner">
    {content}
  </div>;
};

SearchResults.propTypes = {
  superheroes: PropTypes.array.isRequired,
  input: PropTypes.string.isRequired,
};

export default SearchResults;
