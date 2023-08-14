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
  setCombinedFilter: React.Dispatch<React.SetStateAction<CombinedFilterType[]>>,
  applyNumericFilter: any,
  arrayFilter: string[],
  setArrayFilter:React.Dispatch<React.SetStateAction<string[]>>,
};
type ChildrenProps = {
  children: ReactNode,
};

export const PlanetContext = createContext({} as PlanetContextValue);

export function PlanetProvider({ children }: ChildrenProps) {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [filterText, setFilterText] = useState('');
  const [arrayFilter, setArrayFilter] = useState<string[]>(['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water']);
  const [combinedFilter, setCombinedFilter] = useState<CombinedFilterType[]>([]);
  const applyNumericFilter = (selectedColumn, selectedComparison, filterValue) => {
    setCombinedFilter([...combinedFilter,
      { selectedColumn, selectedComparison, filterValue },
    ]);
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

  return (
    <PlanetContext.Provider
      value={ {
        planets,
        filterText,
        setFilterText,
        combinedFilter,
        setCombinedFilter,
        applyNumericFilter,
        arrayFilter,
        setArrayFilter,
      } }
    >
      {children}
    </PlanetContext.Provider>
  );
}
