import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, lifecycle, withState, withHandlers } from 'recompose';
import { Input } from 'antd';
import { getRandomBondData, currentBondDataSelector } from '../../redux/bonds';

const Search = Input.Search;

const ISINInputView = props => (
  <Search
    addonBefore="ISIN"
    value={props.searchInputValue}
    onChange={props.onSearchInputChange}
    onSearch={props.onISINSearch}
    maxLength={12}
    size="large"
  />
);

ISINInputView.propTypes = {
  bondData: PropTypes.object,
  getRandomBondData: PropTypes.func,
};

const connectEnhancer = connect(
  state => ({
    bondData: currentBondDataSelector(state),
  }),
  { getRandomBondData },
);

const withStateEnhancer = withState(
  'searchInputValue',
  'onSearchInputValueChange',
  '',
);

const withHandlersEnhancer = withHandlers({
  onISINSearch: props => () => props.getRandomBondData(),

  onSearchInputChange: props => event =>
    props.onSearchInputValueChange(event.target.value),
});

const lifecycleEnhancer = lifecycle({
  componentDidUpdate(prevProps) {
    if (prevProps.bondData.isin !== this.props.bondData.isin) {
      this.props.onSearchInputValueChange(this.props.bondData.isin);
    }
  },
});

const ISINInput = compose(
  connectEnhancer,
  withStateEnhancer,
  withHandlersEnhancer,
  lifecycleEnhancer,
)(ISINInputView);

export default ISINInput;
