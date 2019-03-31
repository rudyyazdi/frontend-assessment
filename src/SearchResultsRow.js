import React from 'react';
import PropTypes from 'prop-types';

import './search-results-row.scss';

const SearchResultsRow = ({ name, images, work, isDetailed }) => {
  const style = {
    backgroundImage: `url(${images.sm}), url('/not-found.png')`
  };
  const handleOnClick = () => console.log(name);
  const { occupation } = work;

  return <div className="superhero-row" onClick={handleOnClick} data-testid="row">
    <div className="superhero-image" style={style} data-testid="image" />
    <div className="superhero-info" data-testid="info" >
      <h4 data-testid="name">{name}</h4>
      {occupation &&
        occupation.length > 2 &&
        isDetailed &&
        <p data-testid="occupation">{work.occupation}</p>
      }
    </div>
  </div >;
};


SearchResultsRow.propTypes = {
  isDetailed: PropTypes.bool,
  name: PropTypes.string.isRequired,
  images: PropTypes.object.isRequired,
  work: PropTypes.object.isRequired,
};

SearchResultsRow.defaultProps = {
  isDetailed: false,
};

export default SearchResultsRow;
