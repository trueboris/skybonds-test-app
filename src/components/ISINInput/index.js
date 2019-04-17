import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  compose,
  lifecycle,
  withState,
  withHandlers,
  withPropsOnChange
} from "recompose";
import { Input } from "antd";
import debounce from "lodash.debounce";
import { currentBondDataSelector } from "../../selectors/bonds";
import { getRandomBondData } from "../../actions/bonds";
import { inputsConfig } from "../../config";

const Search = Input.Search;

const ISINInputView = props => (
  <Search
    addonBefore="ISIN"
    value={props.searchInputValue}
    onChange={props.onSearchInputChange}
    onSearch={props.onISINSearch}
    maxLength={12}
    size={inputsConfig.size || "large"}
  />
);

ISINInputView.propTypes = {
  bondData: PropTypes.object,
  getRandomBondData: PropTypes.func
};

const connectEnhancer = connect(
  state => ({
    bondData: currentBondDataSelector(state)
  }),
  { getRandomBondData }
);

const withStateEnhancer = withState(
  "searchInputValue",
  "onSearchInputValueChange",
  ""
);

const withHandlersEnhancer = withHandlers({
  onISINSearch: props => () => props.getRandomBondData(),

  onSearchInputChange: props => event =>
    props.onSearchInputValueChange(event.target.value)
});

const debounceEnhancer = withPropsOnChange(["onISINSearch"], props => ({
  onISINSearch: debounce(props.onISINSearch, 1000)
}));

const lifecycleEnhancer = lifecycle({
  componentDidUpdate(prevProps) {
    if (prevProps.bondData.isin !== this.props.bondData.isin) {
      this.props.onSearchInputValueChange(this.props.bondData.isin);
    }
  }
});

const ISINInput = compose(
  connectEnhancer,
  withStateEnhancer,
  withHandlersEnhancer,
  debounceEnhancer,
  lifecycleEnhancer
)(ISINInputView);

export { ISINInputView };
export default ISINInput;
