import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import SearchResultsRow from './SearchResultsRow';

afterEach(cleanup);

it('renders the row', () => {
  const superhero = { name: 'Wolverine', images: { sm: 'image.jpg' }, work: { occupation: 'Doctor' } }
  const { queryByTestId } = render(<SearchResultsRow {...superhero} isDetailed />);
  expect(queryByTestId('row')).toBeInTheDocument();
  expect(queryByTestId('image')).toBeInTheDocument();
  expect(queryByTestId('info')).toBeInTheDocument();
  expect(queryByTestId('name')).toBeInTheDocument();
  expect(queryByTestId('occupation')).toBeInTheDocument();
});

it("doesn't render the description when the occupation is undefined", () => {
  const superhero = { name: 'Wolverine', images: { sm: 'image.jpg' }, work: {} }
  const { queryByTestId } = render(<SearchResultsRow {...superhero} isDetailed />);
  expect(queryByTestId('occupation')).not.toBeInTheDocument();
});

it("doesn't render the description when the occupation is empty", () => {
  const superhero = { name: 'Wolverine', images: { sm: 'image.jpg' }, work: { occupation: '-' } }
  const { queryByTestId } = render(<SearchResultsRow {...superhero} isDetailed />);
  expect(queryByTestId('occupation')).not.toBeInTheDocument();
});

it("doesn't render the description when the occupation when it is not detailed", () => {
  const superhero = { name: 'Wolverine', images: { sm: 'image.jpg' }, work: { occupation: 'Doctor' } }
  const { queryByTestId } = render(<SearchResultsRow {...superhero} />);
  expect(queryByTestId('occupation')).not.toBeInTheDocument();
});
