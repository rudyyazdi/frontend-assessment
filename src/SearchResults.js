import React from 'react';
import PropTypes from 'prop-types';

import './search-results.scss';

const SearchResults = ({ superheroes, input }) => {
  const superheroDivMaker = ({ id, name, images, work }) => {
    const style = {
      backgroundImage: `url(${images.sm}), url('/not-found.png')`
    }
    const handleOnClick = () => console.log(name)

    return <div key={id} className="superhero-row" onClick={handleOnClick}>
      <div className="superhero-image" style={style} />
      <div className="superhero-info">
        <h4>{name}</h4>
        <p>{work.occupation}</p>
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
