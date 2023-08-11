// src/context/PlanetContext.js
import React, { useState, useEffect, createContext, ReactNode } from 'react';
import { Planet, CombinedFilterType } from '../types';

type PlanetContextValue = {
  planets: Planet[],
  filterText: string,
  setFilterText:React.Dispatch<React.SetStateAction<string>>,
  numericFilters: Planet[],
  filterValue: string,
  combinedFilter: CombinedFilterType[],
  // setNumericFilters:React.Dispatch<React.SetStateAction<Planets[]>>,
  applyNumericFilter: any,
};
type ChildrenProps = {
  children: ReactNode,
};

export const PlanetContext = createContext({} as PlanetContextValue);

export function PlanetProvider({ children }: ChildrenProps) {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [filterText, setFilterText] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [combinedFilter, setCombinedFilter] = useState<CombinedFilterType[]>([]);
  const applyNumericFilter = (selectedColumn, selectedComparison, filterValue) => {
    setCombinedFilter([{ selectedColumn, selectedComparison, filterValue },
      ...combinedFilter]);
  };

  useEffect(() => {
    // Fazer a requisição para a API
    const fetchPlanets = async () => {
      const apiUrl = 'https://swapi.dev/api/planets';
      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error('Erro ao buscar planets');
        }

        const data = await response.json();
        const filteredData = data.results.map((elem: Planet) => {
          delete elem.residents;
          return elem;
        });
        setPlanets(filteredData);
      } catch (error) {
        console.error('Erro ao buscar planetas:', error);
        throw error;
      }
    };
    fetchPlanets();
  }, []);

  console.log({ children });
  // Filtrar os planetas com base no filtro de texto
  // const filteredPlanets = planets
  //   .filter((planet) => planet.name.toLowerCase().includes(filterText.toLowerCase()));
  // aplicar filtro numérico
  // const applyNumericFilter = (column, comparison, value) => {
  // logica para filtro numerico
  return (
    <PlanetContext.Provider
      value={ {
        planets,
        filterText,
        setFilterText,
        filterValue,
        combinedFilter,
        applyNumericFilter,
      } }
    >
      {children}
    </PlanetContext.Provider>
  );
}

// export const fetchFilm = async (): Promise<Films[]> => {
//   const apiUrl = 'https://api-trybe-frontend.vercel.app/api/ghibli-animations';

//   try {
//     const response = await fetch(apiUrl);

//     if (!response.ok) {
//       throw new Error('Erro ao buscar filmes');
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Erro ao buscar filmes:', error);
//     throw error;
//   }
// };
// fetch('https://swapi.dev/api/planets')
// .then((response) => response.json())
// .then((data) => {
//   setPlanets(data.results);
// })
