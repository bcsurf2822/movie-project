import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Movie from "./Movie";
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../actions';

const MovieList = () => {
  const movieOrder = useSelector(state => state.movies.order);
  const movies = useSelector(state => state.movies.entries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const movieComponents = movieOrder.map((id) => {
    const movie = movies[id];

    return <Movie id={movie.id} key={id} title={movie.title} img={movie.poster_path} />
  });

  return (
    <MovieGrid>
      {movieComponents}
    </MovieGrid>
  )
}

export default MovieList;


//another way of writing css so that you can style it right in the component
const MovieGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2em;
  margin: 0 auto;
`;