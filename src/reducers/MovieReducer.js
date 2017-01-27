import {
  FETCH_TMDB_ID,
  FETCH_TMDB,
  FETCH_OMDB_ID,
  FETCH_YOUTUBE_TRAILER,
  FETCH_IMDB_RATINGS
} from '../actions';

const INITIAL_STATE = {
  movies: [],
  tmdbMovie: {},
  omdbMovie: {},
  trailer: {},
  ratings: []
};
export const MovieReducer = (state = INITIAL_STATE, action) => {
  console.log('ACTION RECEIVED: ', action.type)
  switch(action.type) {
  case FETCH_TMDB:
    return {...state, movies: action.payload.data.results};
  case FETCH_TMDB_ID:
    return {...state, tmdbMovie: action.payload.data};
  case FETCH_OMDB_ID:
    return {...state, omdbMovie: action.payload.data};
  case FETCH_YOUTUBE_TRAILER:
    return {...state, trailer: action.payload.data};
  case FETCH_IMDB_RATINGS:
    return {...state, ratings: action.payload.data};
  default:
    return state;
  }
}
