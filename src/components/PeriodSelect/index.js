import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { Radio } from 'antd';
import { setPeriod, currentPeriodSelector } from '../../redux/chart';
import { chartConfig } from '../../config';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const getPeriodSelectButtons = (period, index) => (
  <RadioButton key={period + '_' + index} value={chartConfig.periods[period]}>
    {chartConfig.periods[period]}
  </RadioButton>
);

const PeriodSelectView = props =>
  chartConfig.periods && Object.keys(chartConfig.periods).length ? (
    <RadioGroup
      defaultValue={props.period}
      onChange={props.onPeriodChange}
      size="large"
    >
      {Object.keys(chartConfig.periods).map(getPeriodSelectButtons)}
    </RadioGroup>
  ) : (
    <p>
      Please set time periods in <i>config/index.js</i>
    </p>
  );

PeriodSelectView.propTypes = {
  period: PropTypes.string,
  onPeriodChange: PropTypes.func,
};

const connectEnhancer = connect(
  state => ({ period: currentPeriodSelector(state) }),
  { setPeriod },
);

const withHandlersEnhancer = withHandlers({
  onPeriodChange: props => event => props.setPeriod(event.target.value),
});

const PeriodSelect = compose(
  connectEnhancer,
  withHandlersEnhancer,
)(PeriodSelectView);

export default PeriodSelect;
