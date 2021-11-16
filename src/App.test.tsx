import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('Start page', () => {
  test('has dropdown menus', () => {
    render(<App />);
    const difficultyElement = screen.getByText(/easy/i);
    expect(difficultyElement).toBeInTheDocument();

    const categoryElement = screen.getByText(/general knowledge/i);
    expect(categoryElement).toBeInTheDocument();
  });

  test('has a start button', () => {
    render(<App />);
    expect(screen.getByRole('button', { name: /start/i })).toBeInTheDocument();
  });
});
