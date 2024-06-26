import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { PlanetProvider } from './context/PlanetContext';

ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <PlanetProvider>
      <App />
    </PlanetProvider>,

  );
