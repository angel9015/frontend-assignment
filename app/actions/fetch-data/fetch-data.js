// @flow
import { fetchCarData } from '../../services/http-requests';
import { fetchDataError } from './fetch-data-error';
import { fetchDataRequest } from './fetch-data-request';
import { fetchDataSuccess } from './fetch-data-success';

export const fetchData = () => (
  (dispatch) => {
    dispatch(fetchDataRequest());
    return fetchCarData()
      .then((carInfo) => dispatch(fetchDataSuccess(carInfo)))
      .catch(() => dispatch(fetchDataError()));
  }
);
