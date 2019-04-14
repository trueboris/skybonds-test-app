import React from 'react';
import renderer from 'react-test-renderer';
import { PeriodSelectView } from './index';

it('renders correctly', () => {
  const element = renderer.create(<PeriodSelectView />).toJSON();

  expect(element).toMatchSnapshot();
});
