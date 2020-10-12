import React from 'react';
import { render } from '@testing-library/react';
import { MovieWikiModal } from '../components/MovieWikiModal';
import { movieInfo } from './test-data/movieInfo';

// TODO: mock wikiSummaryClient with test-data/wikiSummary.ts
it('should match to MovieWikiModal snapshots', () => {
  const { asFragment } = render(<MovieWikiModal movieInfo={movieInfo} modalClose={() => {}} />);

  expect(asFragment()).toMatchSnapshot();
});
