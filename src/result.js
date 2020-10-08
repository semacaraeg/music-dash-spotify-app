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

export const setAlbums = (albums) => ({
  type: SET_ALBUMS,
  albums
});
export const addAlbums = (albums) => ({
  type: ADD_ALBUMS,
  albums
});
export const setArtists = (artists) => ({
  type: SET_ARTISTS,
  artists
});
export const addArtists = (artists) => ({
  type: ADD_ARTISTS,
  artists
});
export const setPlayList = (playlists) => ({
  type: SET_PLAYLIST,
  playlists
});
export const addPlaylist = (playlists) => ({
  type: ADD_PLAYLIST,
  playlists
});

export const setTracks = (tracks) => ({
  type: SET_TRACKS,
  tracks
});
export const addTracks = (tracks) => ({
  type: ADD_TRACKS,
  tracks
});
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
