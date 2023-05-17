import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import Table from './Table';
import Title from './Title';

const App = () => {

  const seedData = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Bob', age: 28 },
    { id: 4, name: 'Alice', age: 35 },
  ];

  const [ tableData, setTableData ] = useState(seedData)

  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <Table data = {tableData} />
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
