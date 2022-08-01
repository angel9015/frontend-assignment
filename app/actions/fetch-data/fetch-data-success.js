import { FETCH_DATA_SUCCESS } from '../../constants/action-types';

export const fetchDataSuccess = (carInfo) => (
  {
    type: FETCH_DATA_SUCCESS,
    payload: { carInfo },
  }
);
