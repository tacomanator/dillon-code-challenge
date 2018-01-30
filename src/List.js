import React from "react";
import { defaultProps, setPropTypes, compose } from "recompose";
import { Div, H4 } from "glamorous";
import LoadingStatus from "./LoadingStatus";
import PropTypes from "prop-types";

const MovieListItem = props => (
  <Div margin="0.5rem" flexBasis="1">
    <img
      src={`https://d2snwnmzyr8jue.cloudfront.net/${props.artKey}_270.jpeg`}
      alt={`${props.title} movie poster`}
    />
    <H4 marginTop="0.5rem" marginBottom="0.5rem">
      {props.title}
    </H4>
    <Div marginTop="0.5rem" marginBottom="1rem">
      {props.artistName}
    </Div>
  </Div>
);

const MovieList = props => (
  <Div
    display="flex"
    flexDirection="row"
    flexWrap="wrap"
    justifyContent="center"
  >
    {props.movies.map(movie => (
      <MovieListItem key={movie.titleId} {...movie} />
    ))}
  </Div>
);

const enhance = compose(
  defaultProps({
    movies: []
  }),
  setPropTypes({
    movies: PropTypes.array.isRequired,
    request: PropTypes.shape({
      receiving: PropTypes.bool,
      error: PropTypes.string
    })
  })
);

const List = props => (
  <div>
    <LoadingStatus {...props.request} />
    <MovieList movies={props.movies} />
  </div>
);

export default enhance(List);
