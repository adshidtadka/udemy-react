import axios from 'axios';

import { config } from '../../config/config';

const GEOCODE_ENDPOINT = 'https://maps.googleapis.com/maps/api/geocode/json';

export const geocode = place => axios.get(GEOCODE_ENDPOINT, { params: { address: place, key: API_KEY } }).then((results) => {
  const { data } = results;
  const { status } = data;
  const result = results.data.results[0];
  if (typeof result === 'undefined') {
    return { status };
  }
  const address = result.formatted_address;
  const { location } = result.geometry;
  return { status, address, location };
});

export const reverseGeocode = () => null;
