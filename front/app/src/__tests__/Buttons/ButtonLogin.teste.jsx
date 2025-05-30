import { render, screen, fireEvent } from '@testing-library/react';
import LoginPage from '../../pages/LoginPage';


test('deve chamar a função onClick ao clicar no botão e passar de pagina caso nao retorne erro', () => {
  const handleClick = jest.fn(); // Função mock para simular o clique
  render(<LoginPage label="Clique aqui" onClick={handleClick} />);
  
  const button = screen.getByText(/Clique aqui/i);
  fireEvent.click(button);
  
  expect(handleClick).toHaveBeenCalledTimes(1); // Verifica se a função foi chamada
});