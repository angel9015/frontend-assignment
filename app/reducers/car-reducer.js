import {
    FETCH_DATA_ERROR,
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
  } from '../constants/action-types';
  
  const initialState = {
    carInfo: [],
    isLoading: false,
    error: false,
  };
  
  export const getCarSelector = (state) => ({ ...state.car });
  
  const carReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DATA_SUCCESS: {
        return {
          isLoading: false,
          error: false,
          carInfo: action.payload.carInfo,
        };
      }
      case FETCH_DATA_REQUEST: {
        return {
          isLoading: true,
          error: false,
          carInfo: [],
        };
      }
      case FETCH_DATA_ERROR: {
        return {
          ...state,
          isLoading: false,
          error: true,
        };
      }
      default: {
        return state;
      }
    }
  };
  
  export default carReducer;
  