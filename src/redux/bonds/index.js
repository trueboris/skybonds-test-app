import { makeRequest } from '../../api';
import { bondsConfig } from '../../config';
import pickRandomPropertyFromObject from '../../utils/pickRandomPropertyFromObject';

const GET_BOND_DATA_PENDING = 'GET_BOND_DATA_PENDING';
const GET_BOND_DATA_SUCCESS = 'GET_BOND_DATA_SUCCESS';
const GET_BOND_DATA_ERROR = 'GET_BOND_DATA_ERROR';

const initialState = { bondsData: [], currentBondData: {}, bondsDataError: {} };

const handleBondsDataInReducer = (state, action) => ({
  ...state,
  bondsData: state.bondsData.some(
    bondData => bondData.isin === action.payload.isin,
  )
    ? state.bondsData
    : [...state.bondsData, action.payload],
  currentBondData: action.payload,
});

const handleBondDataErrorInReducer = (state, action) => ({
  ...state,
  bondsDataError: action.payload,
});

const bondsReducer = (state = initialState, action) => {
  const handler = {
    GET_BOND_DATA_SUCCESS: handleBondsDataInReducer,
    GET_BOND_DATA_ERROR: handleBondDataErrorInReducer,
  }[action.type];

  return handler ? handler(state, action) : state;
};

const getBondData = url => async dispatch => {
  dispatch({ type: GET_BOND_DATA_PENDING });

  try {
    const response = await makeRequest(url);

    dispatch({ type: GET_BOND_DATA_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_BOND_DATA_ERROR, payload: error });
  }
};

const gerRandomBondData = () =>
  getBondData(pickRandomPropertyFromObject(bondsConfig).api);

const currentBondDataSelector = state => state.bondsReducer.currentBondData;

export { gerRandomBondData, bondsReducer, currentBondDataSelector };