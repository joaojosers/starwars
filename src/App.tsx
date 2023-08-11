// src/App.js
import React from 'react';
import Table from './components/Table';
import NameFilter from './components/NameFilter';
import { PlanetProvider } from './context/PlanetContext';

function App() {
  return (
    <PlanetProvider>
      <div>
        <h1>Star Wars Planets</h1>
        <NameFilter />
        <Table />
      </div>
    </PlanetProvider>
  );
}

export default App;

// import React from 'react';
// import './App.css';

// function App() {
//   return (
//     <>
//       <span>Hello, App!</span>
//       <p>teste</p>

//     </>
//   );
// }

// export default App;
