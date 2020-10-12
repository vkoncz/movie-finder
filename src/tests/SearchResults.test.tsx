import React from 'react';
import { render } from '@testing-library/react';
import { SearchResults } from '../components/SearchResults';
import { results } from './test-data/details';

it('should match to SearchResults snapshots', () => {
  const { asFragment: withoutResults } = render(<SearchResults />);
  const { asFragment: withResults } = render(<SearchResults results={results} />);

  expect(withoutResults()).toMatchSnapshot();
  expect(withResults()).toMatchSnapshot();
});
