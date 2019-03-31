import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import axios from 'axios';

import './search-input.scss';
import SearchResults from './SearchResults';

const SearchInput = ({ className }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");
  const [superheroes, setSuperheroes] = useState([]);

  const onChangeHandler = (event) => {
    const { value } = event.target;
    setInput(value);

    if (value === "") {
      setIsLoading(false);
      setSuperheroes([]);
      return;
    }

    setIsLoading(true);

    axios.get(`/superheroes/?name_like=${value}`)
      .then(r => {
        setIsLoading(false);
        setSuperheroes(r.data);
      });
  };

  return (<div className={classNames([className, 'search-input'])} data-testid="wrapper">
    <input type="text" placeholder="Search.." value={input} onChange={onChangeHandler} data-testid="input" />
    {isLoading &&
      <div className="loader-spinner" data-testid="loader">
        <Loader
          type="Oval"
          color="grey"
          height="30"
          width="30"
        />
      </div>
    }
    {(input !== "") &&
      <div className="search-results outer" data-testid="results">
        <SearchResults {...{ input, superheroes }} />
      </div>
    }
  </div>);
};

SearchInput.propTypes = {
  className: PropTypes.string
};

export default SearchInput;
