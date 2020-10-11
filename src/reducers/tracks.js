//Tracks Reducer for setting the state of the Tracks/Songs result 
import { SET_TRACKS, ADD_TRACKS } from '../misc/miscellaneous';
const tracksReducer = (state = {}, action) => {
  const { tracks } = action;
  switch (action.type) {
    case SET_TRACKS:
      return tracks;
    case ADD_TRACKS:
      return {
        ...state,
        next: tracks.next,
        items: [...state.items, ...tracks.items]
      };
    default:
      return state;
  }
};
export default tracksReducer;
