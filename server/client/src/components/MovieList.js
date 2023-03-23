import React, { useState } from "react";
import styled from "styled-components";
import Movie from "./Movie";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../actions";
import InfiniteScroll from "react-infinite-scroller";

const MovieList = ({ type }) => {
  const [hasMoreItems, setHasMoreItems] = useState(true);
  const movieOrder = useSelector((state) => state.movies.order);
  const movies = useSelector((state) => state.movies.entries);
  const totalPages = useSelector((state) => state.total_pages);
  const dispatch = useDispatch();

  //Custom Hook
  const {
    movieOrder,
    movies,
    getMovies
  } = useMovies(type);

  const loadItems = (page) => {
    if (page < totalPages || totalPages === 0) {
      dispatch(fetchMovies(page));
    } else {
      setHasMoreItems(false);
    }
  };

  const movieComponents = movieOrder.map((id) => {
    const movie = movies[id];

    return (
      <Movie
        id={movie.id}
        key={id}
        title={movie.title}
        img={movie.poster_path}
      />
    );
  });

  if (type === "discover") {
    return (
      <InfiniteScroll loadMore={loadItems} pageStart={0} hasMore={hasMoreItems}>
        <MovieGrid>{movieComponents}</MovieGrid>
      </InfiniteScroll>
    );
  } else {
    return null;
  }
};

export default MovieList;

const MovieGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2em;
  margin: 0 auto;
`;
