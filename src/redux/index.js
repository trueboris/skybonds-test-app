import { combineReducers } from 'redux';
import { bondsReducer } from './bonds';
import { chartReducer } from './chart';

const rootReducer = combineReducers({ chartReducer, bondsReducer });

export default rootReducer;
