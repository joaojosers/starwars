import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { JSX } from 'react/jsx-runtime';
import userEvent from '@testing-library/user-event';

describe('testando a aplicação', () => {
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
     test('verifica as funcionalidades da table', async () => {
      render(<App />);

      const placeHolderText = screen.getByPlaceholderText(/filtrar por nome/i)
      expect(placeHolderText).toBeInTheDocument();
      const inputText = screen.getByRole('textbox');
      
      const filterApply = screen.getByRole('button', {  name: /apply filter/i});
      expect(filterApply).toBeInTheDocument()
      const button = screen.getByRole('button', { name: /apply filter/i});
      await userEvent.type(inputText, 'Hoth');
     
      await userEvent.click(button);
      
      
      const selBox = screen.getByRole('combobox', { name: /population/i });
      
      await userEvent.type(selBox, 'population');
     
      

      expect(button).toBeInTheDocument();

    
  });
  // test('verifica se existem elementos na página Login', async () => {
  //   renderWithRouterAndRedux(
  //     <App />,
  //   );
  //   const inputEmail = screen.getByRole('textbox');
  //   const inputPassword = screen.getByPlaceholderText(/senha/i);
  //   const button = screen.getByRole('button', { name: /entrar/i });
  //   // const inputName = screen.getByPlaceholderText(/nome/i);
  //   expect(inputEmail).toBeInTheDocument();
  //   expect(inputPassword).toBeInTheDocument();
  //   expect(button).toBeInTheDocument();
  //   expect(button).toHaveProperty('disabled');
  // });
  // test('verifica as fucionalidades  na página Login', async () => {
  //   renderWithRouterAndRedux(
  //     <App />,
  //   );
  //   const inputEmail = screen.getByRole('textbox');
  //   const inputPassword = screen.getByPlaceholderText(/senha/i);
  //   const button = screen.getByRole('button', { name: /entrar/i });
  //   await userEvent.type(inputEmail, 'alguem@alguem.com');
  //   await userEvent.type(inputPassword, '123456');
  //   await userEvent.click(button);
  //   expect(button).toBeEnabled();
  //   // expect(global.fetch).toHaveBeenCalled();
  //   expect(await screen.findByTestId('total-field')).toBeInTheDocument();
  //   expect(await screen.findByTestId('header-currency-field')).toBeInTheDocument();
  //   expect(await screen.findByTestId('email-field')).toBeInTheDocument();
  // });
  // test('verifica as funcionalidades da página Wallet', async () => {
  //   renderWithRouterAndRedux(
  //     <App />,
  //   );
  //   const inputEmail = screen.getByRole('textbox');
  //   const inputPassword = screen.getByPlaceholderText(/senha/i);
  //   const button = screen.getByRole('button', { name: /entrar/i });
  //   await userEvent.type(inputEmail, 'abc@def.com');
  //   await userEvent.type(inputPassword, '654321');
  //   await userEvent.click(button);

  //   const title = screen.getByRole('heading', { level: 2, name: /despesas/i });
  //   expect(title).toBeInTheDocument();
  //   const inputDescription = screen.getByRole('textbox', { name: /description:/i });
  //   expect(inputDescription).toBeInTheDocument();
  //   const inputValue = screen.getByRole('spinbutton', { name: /value:/i });
  //   expect(inputValue).toBeInTheDocument();
  //   const currency = screen.getByRole('combobox', { name: /currency:/i });
  //   expect(currency).toBeInTheDocument();
  //   const method = screen.getByRole('combobox', { name: /payment method/i });
  //   expect(method).toBeInTheDocument();
  // });
  // test('verifica as funcionalidades da página Table', async () => {
  //   renderWithRouterAndRedux(
  //     <App />,
  //   );
  //   const inputEmail = screen.getByRole('textbox');
  //   const inputPassword = screen.getByPlaceholderText(/senha/i);
  //   const button = screen.getByRole('button', { name: /entrar/i });
  //   await userEvent.type(inputEmail, 'def@abc.com');
  //   await userEvent.type(inputPassword, '654321');
  //   await userEvent.click(button);
  //   const desCol = screen.getByRole('columnheader', { name: /descrição/i });
  //   expect(desCol).toBeInTheDocument();
  //   const tagCol = screen.getByRole('columnheader', { name: /tag/i });
  //   expect(tagCol).toBeInTheDocument();
  //   const payMethod = screen.getByRole('columnheader', { name: /método de pagamento/i });
  //   expect(payMethod).toBeInTheDocument();
  // });
  // test('verifica as funcionalidades da página WalletForm', async () => {
  //   renderWithRouterAndRedux(
  //     <App />,
  //   );
  //   const inputEmail = screen.getByRole('textbox');
  //   const inputPassword = screen.getByPlaceholderText(/senha/i);
  //   const button = screen.getByRole('button', { name: /entrar/i });
  //   await userEvent.type(inputEmail, 'ghi@jlm.com');
  //   await userEvent.type(inputPassword, '654321');
  //   await userEvent.click(button);
  //   const descBox = screen.getByRole('textbox', { name: /description:/i });
  //   const valueBtn = screen.getByRole('spinbutton', { name: /value:/i });
  //   const curBox = screen.getByRole('combobox', { name: /currency:/i });
  //   const btn = screen.getByRole('button', { name: /adicionar despesa/i });
  //   await userEvent.type(descBox, 'abc');
  //   await userEvent.type(valueBtn, '10');
  //   await userEvent.type(curBox, 'BRL');
  //   await userEvent.click(btn);

  //   expect(btn).toBeInTheDocument();

    
  // });
});





function renderWithRouterAndRedux(arg0: JSX.Element) {
  throw new Error('Function not implemented.');
}
// test('I am your test', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Hello, App!/i);
//   expect(linkElement).toBeInTheDocument();
// });
