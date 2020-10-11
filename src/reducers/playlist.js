//Playlists Reducer for setting the state of the Playlists result 
import { SET_PLAYLIST, ADD_PLAYLIST } from '../misc/miscellaneous';
const playlistReducer = (state = {}, action) => {
  const { playlists } = action;
  switch (action.type) {
    case SET_PLAYLIST:
      return playlists;
    case ADD_PLAYLIST:
      return {
        ...state,
        next: playlists.next,
        items: [...state.items, ...playlists.items]
      };
    default:
      return state;
  }
};
export default playlistReducer;
