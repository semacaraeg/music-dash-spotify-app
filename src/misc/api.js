import axios from 'axios';
import { setSpotifyAuthHeader } from './functions';

export const get = async (url, params) => {
  setSpotifyAuthHeader();
  //API get call thru Axios
  const result = await axios.get(url, params);
  return result.data;
};

export const post = async (url, params) => {
  setSpotifyAuthHeader();

  //API post call thru Axios
  const result = await axios.post(url, params);
  return result.data;
};
