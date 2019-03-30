import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner'

import './search-input.css'

const SearchInput = ({ className }) => {
  const [isLoading, setIsLoading] = useState(false)

  return (<div className={classNames([className, 'search-input'])}>
    <input type="text" placeholder="Search.." />
    {isLoading &&
      <div className="loader-spinner">
        <Loader
          type="Oval"
          color="grey"
          height="30"
          width="30"
        />
      </div>
    }
  </div>)
}

SearchInput.propTypes = {
  className: PropTypes.string
}

export default SearchInput
