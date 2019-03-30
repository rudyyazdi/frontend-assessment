import React from 'react';

import './nav.css'

const Nav = () => (
  <nav>
    <div className="container">
      <div>
        <label className="menu">
          <span></span>
        </label>
      </div>
      <div>
        <h1 className="logo">Marvel</h1>
      </div>
      <div>
        <input type="text" className="nav-search-input" placeholder="Search" />
      </div>
    </div>
  </nav >
)

export default Nav
