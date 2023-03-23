import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addMovieToWatchList } from "../actions";

const WatchListButton = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const movie = useSelector((state) => state.movies.entries[id]);
  const authenticated = useSelector((state) => state.auth.authenticated);

  if (authenticated) {
    return (
      <button onClick={() => dispatch(addMovieToWatchList(movie))}>
        Add to Watch List
      </button>
    );
  } else {
    return null;
  }
};

export default WatchListButton;
