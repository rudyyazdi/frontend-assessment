import React from 'react';
import { render, cleanup, fireEvent, waitForDomChange } from 'react-testing-library';
import 'jest-dom/extend-expect';
import axiosMock from 'axios';

import SearchInput from './SearchInput';

afterEach(cleanup);

it('has the right elements', () => {
  const { queryByTestId } = render(<SearchInput />);
  expect(queryByTestId('wrapper')).toBeInTheDocument();
  expect(queryByTestId('input')).toBeInTheDocument();
  expect(queryByTestId('loader')).not.toBeInTheDocument();
  expect(queryByTestId('results')).not.toBeInTheDocument();
});

it('shows the spinner and the input values when there is a value', () => {
  // don't worry about making an async call right now.
  axiosMock.get.mockImplementationOnce(() => ({ then() { } }));

  const newInput = 'a';
  const { getByTestId, queryByTestId } = render(<SearchInput />);
  const input = getByTestId('input');

  // put a as an input
  fireEvent.change(input, { target: { value: newInput } });
  expect(input.value).toBe(newInput);
  expect(queryByTestId('loader')).toBeInTheDocument();
  expect(queryByTestId('results')).toBeInTheDocument();

  // remove the input
  fireEvent.change(input, { target: { value: '' } });
  expect(input.value).toBe('');
  expect(queryByTestId('loader')).not.toBeInTheDocument();
  expect(queryByTestId('results')).not.toBeInTheDocument();
});

it('removes the spinner when it gets the response', async () => {
  const { getByTestId, queryByTestId } = render(<SearchInput />);
  const input = getByTestId('input');
  fireEvent.change(input, { target: { value: 'a' } });
  await waitForDomChange();
  expect(queryByTestId('loader')).not.toBeInTheDocument();
  expect(queryByTestId('results')).toBeInTheDocument();
});
