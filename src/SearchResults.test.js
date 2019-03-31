import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import SearchResults from './SearchResults';

afterEach(cleanup);

it('shows the error when superheroes are empty', () => {
  const input = '123 test';
  const { queryAllByText } = render(<SearchResults input={input} superheros={[]} />);
  expect(queryAllByText('Oh no!').length).toBe(1);
  expect(queryAllByText(`No results found for "${input}"`).length).toBe(1);
});
