import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { JSX } from 'react/jsx-runtime';
import userEvent from '@testing-library/user-event';

describe('testando a aplicação', () => {
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
  //    test('verifica as funcionalidades da table', async () => {
  //     render(<App />);

  //     const placeHolderText = screen.getByPlaceholderText(/filtrar por nome/i)
  //     expect(placeHolderText).toBeInTheDocument();
  //     const inputText = screen.getByRole('textbox');
      
  //     const filterApply = screen.getByRole('button', {  name: /apply filter/i});
  //     expect(filterApply).toBeInTheDocument()
  //     const button = screen.getByRole('button', { name: /apply filter/i});
  //     await userEvent.type(inputText, 'Hoth');
     
  //     await userEvent.click(button);
      
      
  //     const selBox = screen.getByRole('combobox', { name: /population/i });
      
  //     await userEvent.type(selBox, 'population');
  //     expect(button).toBeInTheDocument();
  // });
});


// test('I am your test', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Hello, App!/i);
//   expect(linkElement).toBeInTheDocument();
// });

// beforeEach(() => {
  //   global.fetch = vi.fn().mockResolvedValue({
  //     json: async () => (mockData),
  //   });
  //   const emailSimulated = 'ninguem@ninguem.com';
  // });
  // test('verifica se a tela de filtro de texto funciona corretamente', async () => {
  //   renderWithRouterAndRedux(
  //     <App />,
  //   );
  //   const filterText = screen.getByRole('textbox');
  //   expect(filterText).toBeInTheDocument();
  // });