import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Card } from "antd";
import Chart from "../Chart";
import IndicatorSelect from "../IndicatorSelect";
import PeriodSelect from "../PeriodSelect";
import { currentBondDataSelector } from "../../redux/bonds";
import isEmptyObject from "../../utils/isEmptyObject";

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

ChartCardView.propTypes = {
  bondData: PropTypes.shape({
    isin: PropTypes.string,
    name: PropTypes.string,
    fullName: PropTypes.string,
    industry: PropTypes.string,
    couponRate: PropTypes.number,
    currentYield: PropTypes.number,
    currency: PropTypes.string,
    maturityDate: PropTypes.string,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.string,
        price: PropTypes.number,
        spread: PropTypes.number,
        yield: PropTypes.number
      })
    )
  })
};

const connectEnhancer = connect(state => ({
  bondData: currentBondDataSelector(state)
}));

const ChartCard = connectEnhancer(ChartCardView);

export default ChartCard;
