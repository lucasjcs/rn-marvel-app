import { combineReducers } from 'redux';

import { reducer as favorites } from './Favorites';

export default combineReducers({
  favorites,
});
