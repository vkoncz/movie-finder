import React from 'react';
import { render } from '@testing-library/react';
import { SearchResultCard } from '../components/SearchResultCard';
import { details } from './test-data/details';

test('should match to SearchResultCard snapshots', () => {
  const { asFragment } = render(<SearchResultCard details={details} onMovieClick={() => {}} />);

  expect(asFragment()).toMatchSnapshot();
});
