// src/App.js
import React from 'react';
import Table from './components/Table';
import NameFilter from './components/NameFilter';
import { PlanetProvider } from './context/PlanetContext';
import NumericFilter from './components/NumericFilter';

function App() {
  return (
    <PlanetProvider>
      <div>
        <h1>Star Wars Planets</h1>
        <NameFilter />
        <NumericFilter />
        <Table />
      </div>
    </PlanetProvider>
  );
}

export default App;
