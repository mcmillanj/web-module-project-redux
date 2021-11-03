
import {TOGGLE_FAVORITES, DELETE_FAVORITE,ADD_FAVORITE} from '../actions/movieActions'


const initialState = {
    favorites: [],
    displayFavorites: true
}
const reducer = (state = initialState, action) => {
         switch(action.type){
        case TOGGLE_FAVORITES:
            return {
              ...state,
              displayFavorites: !state.displayFavorites
            };
            case DELETE_FAVORITE:
                    return {
                      ...state,
                      favorites: state.favorites.filter(favorite => (action.payload !== favorite.id ))
                    };
            case ADD_FAVORITE:
                return {
                  ...state,
                  favorites: [...state.favorites, action.payload]
                };
            
        default:
            return state;
    }
}

export default connect(mapStateToProps)(favoritesReducer); 