import React from 'react';

import SearchInput from './SearchInput';
import './nav.css';

const Nav = () => (
  <nav>
    <div className="nav">
      <div>
        <label className="menu">
          <span></span>
        </label>
      </div>
      <div>
        <h1 className="logo">Marvel</h1>
      </div>
      <div>
        <SearchInput className="nav-search-input" />
      </div>
    </div>
  </nav >
);

export default Nav;
