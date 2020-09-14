import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  setFavorites: ['data'],
});

export const FavoritesTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  characters: [],
});

export const setFavorites = (state, action) => {
  const { characters } = action.data;
  return state.merge({ characters });
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_FAVORITES]: setFavorites,
});
