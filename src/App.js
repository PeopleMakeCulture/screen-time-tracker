import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import Table from './Table';
import Title from './Title';

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <Table />
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
