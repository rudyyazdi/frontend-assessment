import React from 'react';

import './app.css';
import Nav from './Nav';
import SearchInput from './SearchInput';

const App = () => (
  <div>
    <Nav />
    <div className="container">
      <SearchInput className="main-search-input" />
    </div>
  </div>
);

export default App;
