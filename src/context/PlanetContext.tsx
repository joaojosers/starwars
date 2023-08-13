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
  applyNumericFilter: any,
};
type ChildrenProps = {
  children: ReactNode,
};

export const PlanetContext = createContext({} as PlanetContextValue);

export function PlanetProvider({ children }: ChildrenProps) {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [filterText, setFilterText] = useState('');
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

  return (
    <PlanetContext.Provider
      value={ {
        planets,
        filterText,
        setFilterText,
        combinedFilter,
        applyNumericFilter,
      } }
    >
      {children}
    </PlanetContext.Provider>
  );
}
