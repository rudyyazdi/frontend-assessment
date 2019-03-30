import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './search-input.css'

const SearchInput = ({ className }) => (
  <div className={classNames([className, 'search-input'])}>
    <input type="text" placeholder="Search.." />
  </div>
)

SearchInput.propTypes = {
  className: PropTypes.string
}

export default SearchInput
