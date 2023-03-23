import { combineReducers } from "redux";
import MoviesReducer from "./reducer-movies";
import WatchListMoviesReducer from "./reducer-watchlist-movies";
import WatchListCount from "./reducer-watchlist-count";
import TotalPagesReducer from "./reducer-total-pages";
import AuthReducer from './reducer-auth';

const rootReducer = combineReducers({
  movies: MoviesReducer,
  watchListMovies: WatchListMoviesReducer,
  total_pages: TotalPagesReducer,
  auth: AuthReducer,
  watchListCount: WatchListCount,
});

export default rootReducer;
