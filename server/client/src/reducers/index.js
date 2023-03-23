import { combineReducers } from "redux";
import MoviesReducer from "./reducer-movies";
import WatchListMoviesReducer from "./reducer-watchlist-movies"
import TotalPagesReducer from "./reducer-total-pages";
import AuthReducer from './reducer-auth';

const rootReducer = combineReducers({
  movies: MoviesReducer,
  watchListMovies: WatchListMoviesReducer,
  total_pages: TotalPagesReducer,
  auth: AuthReducer
});

export default rootReducer;
