import config from '../lib/config';

export const fetchCarData = () => (
  fetch(config.API_URL)
    .then((res) => res.json())
    .then((data) => data.cars)
    .catch((err) => err)
);
