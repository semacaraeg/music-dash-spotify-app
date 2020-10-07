import { SET_ALBUMS, ADD_ALBUMS } from '../misc/miscellaneous';
//setting the reducer initial state of reducer into empty object
const albumsReducer = (state = {}, action) => {
  const { albums } = action;
  switch (action.type) {
    case SET_ALBUMS:
      return albums;
    case ADD_ALBUMS:
      return {
        ...state,
        next: albums.next,
        items: [...state.items, ...albums.items]
      };
    default:
      return state;
  }
};
export default albumsReducer;
