import { render, screen } from '@testing-library/react';
import App from './App';

test('renders calculator title', () => {
  render(<App />);
  const heading = screen.getByText(/simple calculator/i);
  expect(heading).toBeInTheDocument();
});
