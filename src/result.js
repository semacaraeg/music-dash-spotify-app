/*
Methods for the search result
*/
import {
  SET_ALBUMS,
  ADD_ALBUMS,
  SET_ARTISTS,
  ADD_ARTISTS,
  SET_PLAYLIST,
  ADD_PLAYLIST,
  SET_TRACKS,
  ADD_TRACKS
} from './misc/miscellaneous';
import { get } from './misc/api';

//functions for Tracks/Songs
export const setTracks = (tracks) => ({
  type: SET_TRACKS,
  tracks
});
export const addTracks = (tracks) => ({
  type: ADD_TRACKS,
  tracks
});

//functions for Albums Result
export const setAlbums = (albums) => ({
  type: SET_ALBUMS,
  albums
});
export const addAlbums = (albums) => ({
  type: ADD_ALBUMS,
  albums
});
//functions for Artists Result
export const setArtists = (artists) => ({
  type: SET_ARTISTS,
  artists
});
export const addArtists = (artists) => ({
  type: ADD_ARTISTS,
  artists
});

//functions for Playlists
export const setPlayList = (playlists) => ({
  type: SET_PLAYLIST,
  playlists
});
export const addPlaylist = (playlists) => ({
  type: ADD_PLAYLIST,
  playlists
});


//Method to populate the result initially
export const initiateGetResult = (searchQuery) => {
  return async (dispatch) => {
    try {
      const API_URL = `https://api.spotify.com/v1/search?query=${encodeURIComponent(
        searchQuery
      )}&type=album,playlist,artist,track`;
      //API Get Call to Spotify
      const result = await get(API_URL);
      //console.log("Result from result.js" + result);
      //saving the result to objects
      const { albums, artists, tracks, playlists } = result;
      dispatch(setAlbums(albums));
      dispatch(setArtists(artists));
      dispatch(setTracks(tracks));
      return dispatch(setPlayList(playlists));
    } catch (error) {
      console.log('error', error);
    }
  };
};
//method when the 'More tracks' is clicked by user, returns additional 20 items
export const initiateLoadMoreTracks = (url) => {
  return async (dispatch) => {
    try {
      console.log('url', url);
      const result = await get(url);
      console.log('categories', result);
      return dispatch(addTracks(result.tracks));
    } catch (error) {
      console.log('error', error);
    }
  };
};
//method when the 'More albums' is clicked by user, returns additional 20 items
export const initiateLoadMoreAlbums = (url) => {
  return async (dispatch) => {
    try {
      console.log('url', url);
      const result = await get(url);
      console.log('categories', result);
      return dispatch(addAlbums(result.albums));
    } catch (error) {
      console.log('error', error);
    }
  };
};
//method when the 'More artists' is clicked by user, returns additional 20 items
export const initiateLoadMoreArtists = (url) => {
  return async (dispatch) => {
    try {
      console.log('url', url);
      const result = await get(url);
      console.log('categories', result);
      return dispatch(addArtists(result.artists));
    } catch (error) {
      console.log('error', error);
    }
  };
};
//method when the 'More playlists' is clicked by user, returns additional 20 items
export const initiateLoadMorePlaylist = (url) => {
  return async (dispatch) => {
    try {
      console.log('url', url);
      const result = await get(url);
      console.log('categories', result);
      return dispatch(addPlaylist(result.playlists));
    } catch (error) {
      console.log('error', error);
    }
  };
};
