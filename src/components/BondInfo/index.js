import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Card } from "antd";
import { currentBondDataSelector } from "../../selectors/bonds";
import isEmptyObject from "../../utils/isEmptyObject";
import "./bond-info.css";

const BondInfoView = props => {
  if (isEmptyObject(props.bondData)) {
    return (
      <Card>
        <p>Please enter ISIN</p>
      </Card>
    );
  }

  return (
    <Card>
      <h1 className="bond-info__heading">
        <span>{props.bondData.name}</span>,
        <span className="with-margin-left">{props.bondData.couponRate}</span>,
        <span className="with-margin-left">{props.bondData.currentYield}</span>
      </h1>
      <span className="bond-info__currency with-margin-left">
        {props.bondData.currency}
      </span>
      <div>
        <p>{props.bondData.isin}</p>
        <span>{props.bondData.fullName}</span>,
        <span className="with-margin-left">{props.bondData.industry}</span>,
        <span className="with-margin-left">{props.bondData.maturityDate}</span>
      </div>
    </Card>
  );
};

BondInfoView.propTypes = {
  bondData: PropTypes.shape({
    isin: PropTypes.string,
    name: PropTypes.string,
    fullName: PropTypes.string,
    industry: PropTypes.string,
    couponRate: PropTypes.number,
    currentYield: PropTypes.number,
    currency: PropTypes.string,
    maturityDate: PropTypes.string
  })
};

const connectEnhancer = connect(state => ({
  bondData: currentBondDataSelector(state)
}));

const BondInfo = connectEnhancer(BondInfoView);

export default BondInfo;
