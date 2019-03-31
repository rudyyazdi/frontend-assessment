import React from 'react';
import PropTypes from 'prop-types';

import './search-results.css';

const SearchResults = ({ superheroes, input, images }) => {
  const superheroDivMaker = ({ id, name, images }) => {
    const style = {
      backgroundImage: `url(${images.sm}), url('/not-found.png')`
    }
    return <div key={id} className="superhero-row">
      <div className="superhero-image" style={style} />
      <div className="superhero-info">
        {name}
      </div>
    </div >
  }
  const content = (superheroes.length > 0)
    ? superheroes.map(superheroDivMaker)
    : <>
      <h3 className="not-found">Oh no!</h3>
      <p className="not-found">No results found for &quot;{input}&quot; </p>
    </>

  return <div className="search-results inner">
    {content}
  </div>
};

SearchResults.propTypes = {
  superheroes: PropTypes.array.isRequired,
  input: PropTypes.string.isRequired,
};

export default SearchResults;
