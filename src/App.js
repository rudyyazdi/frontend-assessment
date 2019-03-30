import React, { Component } from 'react';

import './app.css';
import Nav from './Nav';
import SearchInput from './SearchInput'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <SearchInput className="main-search-input" />
      </div>
    );
  }
}

export default App;
