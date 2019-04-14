import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { Select } from 'antd';
import { setIndicator, currentIndicatorSelector } from '../../redux/chart';
import { chartConfig } from '../../config';

const Option = Select.Option;

const getIndicatorSelectOptions = (indicator, index) => (
  <Option
    key={indicator + '_' + index}
    value={chartConfig.indicators[indicator]}
  >
    {chartConfig.indicators[indicator]}
  </Option>
);

const IndicatorSelectView = props =>
  chartConfig.indicators && Object.keys(chartConfig.indicators).length ? (
    <Select
      defaultValue={props.indicator}
      onChange={props.onIndicatorChange}
      size="large"
    >
      {Object.keys(chartConfig.indicators).map(getIndicatorSelectOptions)}
    </Select>
  ) : (
    <p>
      Please set indicators in <i>config/index.js</i>
    </p>
  );

IndicatorSelectView.propTypes = {
  indicator: PropTypes.string,
  onIndicatorChange: PropTypes.func,
};

const connectEnhancer = connect(
  state => ({ indicator: currentIndicatorSelector(state) }),
  { setIndicator },
);

const withHandlersEnhancer = withHandlers({
  onIndicatorChange: props => event => props.setIndicator(event),
});

const IndicatorSelect = compose(
  connectEnhancer,
  withHandlersEnhancer,
)(IndicatorSelectView);

export default IndicatorSelect;
