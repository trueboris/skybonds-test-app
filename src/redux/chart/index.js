import { chartConfig } from "../../config";

const SET_INDICATOR = "SET_INDICATOR";
const SET_PERIOD = "SET_PERIOD";

const initialState = {
  currentIndicator: chartConfig.indicators
    ? chartConfig.indicators.PRICE
    : "PRICE",
  currentPeriod: chartConfig.periods ? chartConfig.periods.MONTH : "MONTH"
};

const handleCurrentIndicatorInReducer = (state, action) => ({
  ...state,
  currentIndicator: action.payload
});

const handleCurrentPeriodInReducer = (state, action) => ({
  ...state,
  currentPeriod: action.payload
});

const chartReducer = (state = initialState, action) => {
  const handler = {
    SET_INDICATOR: handleCurrentIndicatorInReducer,
    SET_PERIOD: handleCurrentPeriodInReducer
  }[action.type];

  return handler ? handler(state, action) : state;
};

const setIndicator = indicator => ({
  type: SET_INDICATOR,
  payload: indicator
});

const setPeriod = period => ({
  type: SET_PERIOD,
  payload: period
});

const currentIndicatorSelector = state => state.chartReducer.currentIndicator;
const currentPeriodSelector = state => state.chartReducer.currentPeriod;

export {
  setIndicator,
  setPeriod,
  currentIndicatorSelector,
  currentPeriodSelector,
  chartReducer
};
