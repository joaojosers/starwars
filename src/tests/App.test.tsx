import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import App from '../App';
import mockData from './mockData';
import userEvent from '@testing-library/user-event';

describe('testando a aplicação', () => {
  beforeEach(() => {
    global.fetch = vi.fn().mockResolvedValue({
      json: async () => (mockData),
    });
    // json: async () => ({
    //   ...mockData, ok: true,
    // }),
  });
    test('renders App component', () => {
      render(<App />);
      const filterText = screen.getByRole('textbox');
      expect(filterText).toBeInTheDocument();
      const placeHolderText = screen.getByPlaceholderText(/filtrar por nome/i)
      expect(placeHolderText).toBeInTheDocument();
      screen.debug();
    });
    test('renders App component e se todas os títulos de coluna existem', () => {
      render(<App />);
      const columnHeader1 = screen.getByRole('columnheader', {  name: /name/i});
      expect(columnHeader1).toBeInTheDocument();
      const columnHeader2 = screen.getByRole('columnheader', {  name: /created/i});
      expect(columnHeader2).toBeInTheDocument();
      const columnHeader3 = screen.getByRole('columnheader', {  name: /edited/i});
      expect(columnHeader3).toBeInTheDocument();
      const columnHeader4 = screen.getByRole('columnheader', {  name: /films/i});
      expect(columnHeader4).toBeInTheDocument();
      const columnHeader5 = screen.getByRole('columnheader', {  name: /rotation_period/i});
      expect(columnHeader5).toBeInTheDocument();
      const columnHeader6 = screen.getByRole('columnheader', {  name: /orbital_period/i});
      expect(columnHeader6).toBeInTheDocument();
      const columnHeader7 = screen.getByRole('columnheader', {  name: /diameter/i});
      expect(columnHeader7).toBeInTheDocument();
      const columnHeader8 = screen.getByRole('columnheader', {  name: /climate/i});
      expect(columnHeader8).toBeInTheDocument();
      const columnHeader9 = screen.getByRole('columnheader', {  name: /gravity/i});
      expect(columnHeader9).toBeInTheDocument();
      const columnHeader10 = screen.getByRole('columnheader', {  name: /terrain/i});
      expect(columnHeader10).toBeInTheDocument();
      const columnHeader11 = screen.getByRole('columnheader', {  name: /surface_water/i});
      expect(columnHeader11).toBeInTheDocument();
      const columnHeader12 = screen.getByRole('columnheader', {  name: /population/i});
      expect(columnHeader12).toBeInTheDocument();
      const columnHeader13 = screen.getByRole('columnheader', {  name: /url/i});
      expect(columnHeader13).toBeInTheDocument();
    });
    test('renders App component e se o button Apply Filter existe', () => {
      render(<App />);
      const filterApply = screen.getByRole('button', {  name: /apply filter/i});
      expect(filterApply).toBeInTheDocument();
      screen.debug();
    });
    test('renders App component e se o button Filter Value existe', () => {
      render(<App />);
      const filterValue = screen.getByRole('spinbutton');
      expect(filterValue).toBeInTheDocument();
      screen.debug();
    });
 
  test('renders App component e se o button Filter Value existe', async () => {
    render(<App />);
    const view1 = await screen.findByTestId("column-filter");
    expect(view1).toBeInTheDocument();
    const view2 = await screen.findByTestId("comparison-filter");
    expect(view2).toBeInTheDocument();
    const view3 = await screen.findByTestId("value-filter");
    expect(view3).toBeInTheDocument();
    // const view4 = await screen.getByRole('button', {  name: /apply filter/i});
    // expect(view4).toBeInTheDocument();
    const applyFiltersBtn = await screen.findByRole('button', {  name: /Apply Filter/i});
    userEvent.click(applyFiltersBtn);

    const removeFiltersBtn = await screen.findByRole('button', {  name: /Remove All Filters/i});
    userEvent.click(removeFiltersBtn);
    // expect(removeFiltersBtn).toBeInTheDocument();
    // const filterValue = await screen.getByDisplayValue(/24/i);
    // expect(filterValue).toBeInTheDocument();
    // const filterPop = await screen.getByText(/population maior que 24/i);
    // expect (filterPop).toBeInTheDocument;
    // const exhbitBtn =within(view).getByRole('button', {name: /remove/i});
    // expect(exhbitBtn).toBeInTheDocument();
  });
});
