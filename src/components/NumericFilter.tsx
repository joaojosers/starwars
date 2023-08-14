// src/components/NumericFilter.js
import React, { useContext, useState } from 'react';
import { PlanetContext } from '../context/PlanetContext';

function NumericFilter() {
  const { applyNumericFilter, arrayFilter, setArrayFilter } = useContext(PlanetContext);
  const [selectedColumn, setSelectedColumn] = useState('population');
  const [selectedComparison, setSelectedComparison] = useState('maior que');
  const [filterValue, setFilterValue] = useState(0);
  // const applyNumericFilter = () => {
  //   setSelectedColumn();
  // };
  const handleApplyFilter = () => {
    applyNumericFilter(selectedColumn, selectedComparison, parseInt(filterValue, 10));
    const filteredOptions = arrayFilter.filter((filtro) => filtro !== selectedColumn);
    setArrayFilter(filteredOptions);
    setSelectedColumn(filteredOptions[0]);
  };

  return (
    <div>
      <select
        value={ selectedColumn }
        onChange={ (e) => setSelectedColumn(e.target.value) }
        data-testid="column-filter"
      >
        {arrayFilter.map((filtro) => (
          <option value={ filtro }>{filtro}</option>
        ))}

        {/* {arrayFilter.filter((filtro) => (
          filtro !== selectedColumn
        ))} */}
        {/* <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option> */}
      </select>

      <select
        value={ selectedComparison }
        onChange={ (e) => setSelectedComparison(e.target.value) }
        data-testid="comparison-filter"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        type="number"
        value={ filterValue }
        onChange={ (e) => setFilterValue(e.target.value) }
        data-testid="value-filter"
      />

      <button
        disabled={ !selectedColumn }
        onClick={ handleApplyFilter }
        data-testid="button-filter"
      >
        Apply Filter
      </button>
    </div>
  );
}

export default NumericFilter;
