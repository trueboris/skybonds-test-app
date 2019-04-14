import React from 'react';
import renderer from 'react-test-renderer';
import { IndicatorSelectView } from './index';
import { chartConfig } from '../../config';

it('renders correctly', () => {
  const element = renderer
    .create(<IndicatorSelectView defaultValue={chartConfig.indicators.PRICE} />)
    .toJSON();

  expect(element).toMatchSnapshot();
});
