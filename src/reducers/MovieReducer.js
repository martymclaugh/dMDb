import {
  FETCH_TMDB_ID,
  FETCH_TMDB,
  FETCH_OMDB_ID,
  FETCH_YOUTUBE_TRAILER,
  FETCH_IMDB_RATINGS,
  FETCH_NOW_PLAYING,
  FETCH_POPULAR,
  FETCH_TOP_RATED,
  FETCH_UPCOMING
} from '../actions';

const INITIAL_STATE = {
  nowPlaying: [],
  popular: [],
  upcoming: [],
  topRated: [],
  movies: [],
  tmdbMovie: {},
  omdbMovie: {},
  trailer: {},
  ratings: []
};
export const MovieReducer = (state = INITIAL_STATE, action) => {
  console.log('ACTION RECEIVED: ', action.type)
  switch(action.type) {
  case FETCH_POPULAR:
    return {...state, popular: action.payload.data.results};
  case FETCH_UPCOMING:
    return {...state, upcoming: action.payload.data.results};
  case FETCH_TOP_RATED:
    return {...state, topRated: action.payload.data.results};
  case FETCH_NOW_PLAYING:
    return {...state, nowPlaying: action.payload.data.results};
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
