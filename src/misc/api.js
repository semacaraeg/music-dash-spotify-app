import axios from 'axios';
import { setSpotifyAuthHeader } from './functions';

export const get = async (url, params) => {
  setSpotifyAuthHeader();
  //API get call thru Axios
  const result = await axios.get(url, params);
//returns access_token and expire_in
  console.log(result.data);
//Returns the data from the api get request
  return result.data;
};

export const post = async (url, params) => {
  //Call to set the access_token for Spotify
  setSpotifyAuthHeader();
  //API post call thru Axios
  const result = await axios.post(url, params);
  return result.data;
};
