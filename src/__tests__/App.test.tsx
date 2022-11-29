import { render, screen } from '@testing-library/react';
import App from '../App';

test('withTitle is rendering', () => {
  render(<App />);
  const title = screen.getByText(/Page/i);
  expect(title).toBeInTheDocument()
});

test('withAuth is false', () => {
  render(<App />)
  const auth = screen.getByText(/Not Authorized/i)
  expect(auth).toBeInTheDocument()
})
