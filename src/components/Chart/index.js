import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose, withProps } from "recompose";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";
import {
  currentIndicatorSelector,
  currentPeriodSelector
} from "../../redux/chart";
import { currentBondDataSelector } from "../../redux/bonds";
import { chartConfig } from "../../config";
import makeBondDataWithPeriod from "../../utils/makeBondDataWithPeriod";

const ChartView = props =>
  chartConfig.size && chartConfig.styles ? (
    <LineChart
      width={chartConfig.size.width}
      height={chartConfig.size.height}
      data={props.bondDataWithPeriodSelected}
    >
      <Line
        type={chartConfig.styles.lineType}
        dataKey={props.indicator}
        stroke={chartConfig.styles.lineStrokeColor}
      />
      <CartesianGrid
        stroke={chartConfig.styles.cartesianGridStrokeColor}
        strokeDasharray={chartConfig.styles.cartesianGridStrokeDasharray}
      />
      <XAxis
        dataKey={chartConfig.xAxis || "date"}
        interval="preserveEnd"
        minTickGap={10}
        tickCount={10}
      />
      <YAxis dataKey={props.indicator} />
      <Tooltip />
    </LineChart>
  ) : (
    <p>
      Please set chart config in <i>config/index.js</i>
    </p>
  );

ChartView.propTypes = {
  bondData: PropTypes.object,
  bondDataWithPeriodSelected: PropTypes.array,
  indicator: PropTypes.string,
  period: PropTypes.string
};

const connectEnhancer = connect(state => ({
  bondData: currentBondDataSelector(state),
  indicator: currentIndicatorSelector(state),
  period: currentPeriodSelector(state)
}));

const withPropsEnhancer = withProps(props => ({
  bondDataWithPeriodSelected: makeBondDataWithPeriod(
    props.bondData.data,
    props.period
  )
}));

const Chart = compose(
  connectEnhancer,
  withPropsEnhancer
)(ChartView);

export default Chart;
