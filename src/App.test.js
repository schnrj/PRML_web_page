import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Welcome to My App/i);
  expect(titleElement).toBeInTheDocument();
});
