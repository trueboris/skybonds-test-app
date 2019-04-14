import React from 'react';
import renderer from 'react-test-renderer';
import { ISINInputView } from './index';

it('renders correctly', () => {
  const element = renderer.create(<ISINInputView />).toJSON();

  expect(element).toMatchSnapshot();
});
