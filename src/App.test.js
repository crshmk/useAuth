import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./useAuth/fetchUser')

describe('useAuth hook', function() {
  test('renders fetched name', function() {
    render(<App />);
    const linkElement = screen.getByText(/Clementine Bauch/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('renders fetched email', function() {
    render(<App />);
    const linkElement = screen.getByText(/Nathan@yesenia.net/i);
    expect(linkElement).toBeInTheDocument();
  });
})
