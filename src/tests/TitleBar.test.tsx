import React from 'react';
import { render } from '@testing-library/react';
import { TitleBar } from '../components/TitleBar';

it('should match to TitleBar snapshots', () => {
  const { asFragment } = render(<TitleBar />);

  expect(asFragment()).toMatchSnapshot();
});
