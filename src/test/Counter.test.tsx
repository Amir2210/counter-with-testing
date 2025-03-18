import Counter from '../components/Counter';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

test('renders component with initial value from prop', () => {
  render(<Counter initValue={0} />);
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('0');
});
