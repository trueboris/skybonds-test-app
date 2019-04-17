import {
  GET_BOND_DATA_PENDING,
  GET_BOND_DATA_SUCCESS,
  GET_BOND_DATA_ERROR
} from "../../constants/bonds";
import { makeRequest } from "../../api";
import pickRandomPropertyFromObject from "../../utils/pickRandomPropertyFromObject";
import { bondsConfig } from "../../config";

const getBondData = url => async dispatch => {
  dispatch({ type: GET_BOND_DATA_PENDING });

  try {
    const response = await makeRequest(url);

    dispatch({ type: GET_BOND_DATA_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_BOND_DATA_ERROR, payload: error });
  }
};

const getRandomBondData = () =>
  getBondData(pickRandomPropertyFromObject(bondsConfig).url);

export { getBondData, getRandomBondData };
