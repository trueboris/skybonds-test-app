import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'antd';
import Chart from '../Chart';
import IndicatorSelect from '../IndicatorSelect';
import PeriodSelect from '../PeriodSelect';
import { currentBondDataSelector } from '../../redux/bonds';
import isEmptyObject from '../../utils/isEmptyObject';

const ChartCardView = props =>
  props.bondData && !isEmptyObject(props.bondData) ? (
    <Card>
      <div className="controls">
        <PeriodSelect />
        <IndicatorSelect />
      </div>
      <Chart />
    </Card>
  ) : null;

const connectEnhancer = connect(state => ({
  bondData: currentBondDataSelector(state),
}));

const ChartCard = connectEnhancer(ChartCardView);

export default ChartCard;
