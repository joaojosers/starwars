// src/components/NumericFilter.js
import React, { useContext, useState } from 'react';
import { PlanetContext } from '../context/PlanetContext';

function NumericFilter() {
  const { applyNumericFilter, arrayFilter, setArrayFilter,
    combinedFilter, setCombinedFilter } = useContext(PlanetContext);
  const [selectedColumn, setSelectedColumn] = useState('population');
  const [selectedComparison, setSelectedComparison] = useState('maior que');
  const [filterValue, setFilterValue] = useState<string>('0');
  // const applyNumericFilter = () => {
  //   setSelectedColumn();
  // };
  const handleApplyFilter = () => {
    applyNumericFilter(selectedColumn, selectedComparison, parseInt(filterValue, 10));
    const filteredOptions = arrayFilter.filter((filtro) => filtro !== selectedColumn);
    setArrayFilter(filteredOptions);
    setSelectedColumn(filteredOptions[0]);
  };
  const removeNumericFilter = (index: any) => {
    const deleteFilter = combinedFilter[index];
    const newFilter = combinedFilter.filter((filtro) => filtro
      .selectedColumn !== deleteFilter.selectedColumn);
    setCombinedFilter(newFilter);
  };

  const removeAllNumericFilters = () => {
    setCombinedFilter([]);
  };

  return (

    <div>
      <select
        value={ selectedColumn }
        onChange={ (e) => setSelectedColumn(e.target.value) }
        data-testid="column-filter"
      >
        {arrayFilter.map((filtro) => (
          <option key={ filtro } value={ filtro }>{filtro}</option>
        ))}

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

      <button onClick={ removeAllNumericFilters } data-testid="button-remove-filters">
        Remove All Filters
      </button>
      {/* <button onClick={ removeNumericFilter }>Remove</button>  */}
      {combinedFilter.map((filter, index) => (
        <div key={ index } data-testid="filter">
          {/* {combinedFilter.includes(filter.selectedColumn) && ( */}
          <button onClick={ () => removeNumericFilter(index) }>Remove</button>
          {/* )} */}
          {filter.selectedColumn}
          {' '}
          {filter.selectedComparison}
          {' '}
          {filter.filterValue}
        </div>
      ))}
    </div>

  );
}

export default NumericFilter;

// {numericFilters.map((filter, index) => (
//   <div key={index} data-testid="filter">
//     {availableColumns.includes(filter.column) && (
//       <button onClick={() => removeNumericFilter(index)}>Remove</button>
//     )}
//     {filter.column} {filter.comparison} {filter.value}
//   </div>
// ))}
