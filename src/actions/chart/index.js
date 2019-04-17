import { SET_INDICATOR, SET_PERIOD } from "../../constants/chart";

const setIndicator = indicator => ({
  type: SET_INDICATOR,
  payload: indicator
});

const setPeriod = period => ({
  type: SET_PERIOD,
  payload: period
});

export { setIndicator, setPeriod };
