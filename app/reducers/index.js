import { combineReducers } from 'redux';
import carReducer from './car-reducer';

// Root Reducer
const rootReducer = combineReducers({
  car: carReducer,
});

export default rootReducer;
