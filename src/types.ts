export type Planet = {
  name: string,
  created: string,
  edited: string,
  films: string[],
  rotation_period: number,
  orbital_period: number,
  diameter: number,
  climate: string,
  gravity: string,
  terrain: string,
  surface_water: number,
  population: number,
  url: string,
  residents?: [],
};
export type CombinedFilterType = {
  selectedColumn: 'population' | 'diameter'
  | 'orbital_period' | 'rotation_period' | 'surface_water',
  selectedComparison: string,
  filterValue: number,
};
