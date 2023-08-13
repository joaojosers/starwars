// src/components/Table.js
import React, { useContext, useEffect, useState } from 'react';
import { PlanetContext } from '../context/PlanetContext';
import { Planet } from '../types';

function Table() {
  const { planets, filterText, combinedFilter } = useContext(PlanetContext);
  const [column, SetColumn] = useState<string[]>([]);
  const [tableData, setTableData] = useState<Planet[]>([]);

  useEffect(() => {
    SetColumn(Object.keys(planets));
    setTableData(Object.values(planets));
  }, [planets]);
  let filteredPlanets = tableData.filter((elem) => elem.name.includes(filterText));
  combinedFilter.forEach((filter) => {
    const { selectedComparison, filterValue, selectedColumn } = filter;
    filteredPlanets = filteredPlanets.filter((planet) => {
      const integerSelectedColumn = parseInt(planet[selectedColumn], 10);
      if (selectedComparison === 'maior que') {
        return (integerSelectedColumn > filterValue);
      } if (selectedComparison === 'menor que') {
        return (integerSelectedColumn < filterValue);
      }
      return (integerSelectedColumn === filterValue);
    });
  });

  return (
    <table style={ { textAlign: 'center' } }>
      <thead>
        <tr>
          <th>name</th>
          <th>created</th>
          <th>edited</th>
          <th>films</th>
          <th>rotation_period</th>
          <th>orbital_period</th>
          <th>diameter</th>
          <th>climate</th>
          <th>gravity</th>
          <th>terrain</th>
          <th>surface_water</th>
          <th>population</th>
          <th> url</th>
        </tr>
      </thead>

      <tbody>
        {filteredPlanets.map((planet) => {
          return (
            <tr key={ planet.name }>
              <td>{planet.name}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.films}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.url}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
