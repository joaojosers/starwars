// src/components/NumericFilter.js
import React, { useContext, useState } from 'react';
import { PlanetContext } from '../context/PlanetContext';

function NumericFilter() {
  const { applyNumericFilter } = useContext(PlanetContext);
  const [selectedColumn, setSelectedColumn] = useState('population');
  const [selectedComparison, setSelectedComparison] = useState('greaterThan');
  const [filterValue, setFilterValue] = useState(0);

  const handleApplyFilter = () => {
    applyNumericFilter(selectedColumn, selectedComparison, filterValue);
  };

  return (
    <div>
      <select
        value={ selectedColumn }
        onChange={ (e) => setSelectedColumn(e.target.value) }
        data-testid="column-filter"
      >
        <option value="population">Population</option>
        <option value="orbital_period">Orbital Period</option>
        <option value="diameter">Diameter</option>
        <option value="rotation_period">Rotation Period</option>
        <option value="surface_water">Surface Water</option>
      </select>

      <select
        value={ selectedComparison }
        onChange={ (e) => setSelectedComparison(e.target.value) }
        data-testid="comparison-filter"
      >
        <option value="greaterThan">Greater Than</option>
        <option value="lessThan">Less Than</option>
        <option value="equals">Equals</option>
      </select>

      <input
        type="number"
        value={ filterValue }
        onChange={ (e) => setFilterValue(e.target.value) }
        data-testid="value-filter"
      />

      <button onClick={ handleApplyFilter } data-testid="button-filter">
        Apply Filter
      </button>
    </div>
  );
}

export default NumericFilter;
