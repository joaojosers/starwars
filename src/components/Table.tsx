// src/components/Table.js
import React, { useContext, useEffect, useState } from 'react';
import { PlanetContext } from '../context/PlanetContext';
import { Planet } from '../types';

function Table() {
  const { planets: Planet, filterText } = useContext(PlanetContext);
  const [column, SetColumn] = useState<string[]>([]);
  const [tableData, setTableData] = useState<Planet[]>([]);

  useEffect(() => {
    SetColumn(Object.keys(Planet));
    setTableData(Object.values(Planet));
  }, [Planet]);
  console.log({ planets: Planet });
  // const tableHeaders = Object.keys(planets).filter((key) => key !== 'residents');
  const planetFilteredByText = tableData.filter((elem) => elem.name.includes(filterText));
  return (
    <table>
      <thead>
        {/* <tr>
          {column.map((header) => (
            <th key={ header }>{header}</th>
          ))}
        </tr> */}
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
        {planetFilteredByText.map((Planet) => {
          return (
            <>
              {/* <div>Table</div> */}
              <tr key={ Planet.name }>
                <td>{Planet.name}</td>
                <td>{Planet.created}</td>
                <td>{Planet.edited}</td>
                <td>{Planet.rotation_period}</td>
                <td>{Planet.orbital_period}</td>
                <td>{Planet.diameter}</td>
                <td>{Planet.climate}</td>
                <td>{Planet.gravity}</td>
                <td>{Planet.terrain}</td>
                <td>{Planet.surface_water}</td>
                <td>{Planet.population}</td>
                <td>{Planet.url}</td>
                <td>{Planet.name}</td>
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;

{ /* <thead>
        <tr>
          {column.map((header) => (
            <th key={ header }>{header}</th>
          ))}
        </tr>
      </thead> */ }
