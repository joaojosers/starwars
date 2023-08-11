import React, { useContext } from 'react';
import { PlanetContext } from '../context/PlanetContext';

function NameFilter() {
  const { filterText, setFilterText } = useContext(PlanetContext);

  return (
    <div>
      <input
        type="text"
        placeholder="Filtrar por nome"
        value={ filterText }
        onChange={ (e) => setFilterText(e.target.value) }
        data-testid="name-filter"
      />
    </div>
  );
}

export default NameFilter;
