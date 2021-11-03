import { combineReducers } from 'redux';
import favoriteReducer from './favoritesReducer'
import movieReducer from './movieReducer';

// export default movieReducer;

export default combineReducers({
favoriteReducer: favoriteReducer,    
movieReducer: movieReducer

}); 