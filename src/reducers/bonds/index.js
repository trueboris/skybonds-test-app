const initialState = { bondsData: [], currentBondData: {}, bondsDataError: {} };

const handleBondsDataInReducer = (state, action) => ({
  ...state,
  bondsData: state.bondsData.some(
    bondData => bondData.isin === action.payload.isin
  )
    ? state.bondsData
    : [...state.bondsData, action.payload],
  currentBondData: action.payload
});

const handleBondDataErrorInReducer = (state, action) => ({
  ...state,
  bondsDataError: action.payload
});

const bondsReducer = (state = initialState, action) => {
  const handler = {
    GET_BOND_DATA_SUCCESS: handleBondsDataInReducer,
    GET_BOND_DATA_ERROR: handleBondDataErrorInReducer
  }[action.type];

  return handler ? handler(state, action) : state;
};

export { bondsReducer };
