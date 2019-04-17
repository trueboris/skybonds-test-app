import { chartConfig } from "../../config";

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

export { chartReducer };
