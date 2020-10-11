import axios from 'axios';

/* Stores the access_token, token_type and expires_in from the URL params
returned after logging-in to Spotify */
export const getUrlParamValues = (url) => {
  console.log("URL returned" + url);
  return url
    .slice(1)
    .split('&')
    .reduce((prev, curr) => {
      const [title, value] = curr.split('=');
      prev[title] = value;
      console.log("returned after slice "+prev[title] + prev[value])
      return prev;
    }, {});
};

//Adds access_token to the URL header before every API request using Axios
export const setSpotifyAuthHeader = () => {
  try {
    const params = JSON.parse(localStorage.getItem('params'));
    if (params) {
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${params.access_token}`;
    }
  } catch (error) {
    console.log('Error setting auth', error);
  }
};
