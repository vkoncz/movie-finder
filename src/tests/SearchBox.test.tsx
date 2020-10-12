import React from 'react';
import { render } from '@testing-library/react';
import { SearchBox } from '../components/SearchBox';

it('should match to SearchBox snapshots', () => {
  const { asFragment } = render(<SearchBox resultChange={() => {}} />);

  expect(asFragment()).toMatchSnapshot();
});
