import { render, screen } from '@testing-library/react';
import App from './App';

test('wagie', () => {
  render(<App />);
  const linkElement = screen.getByText('Add New Element');
  expect(linkElement).toBeInTheDocument();
});
