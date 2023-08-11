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
  selectedColumn: string,
  selectedComparison: string,
  filterValue: number,
};
