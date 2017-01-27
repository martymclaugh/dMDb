import { FETCH_OMDB, FETCH_TMDB } from '../actions';

const INITIAL_STATE = { movies: [], movie: {}, ratings: [] };
export const MovieReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case FETCH_TMDB:
    return {...state, movie: action.payload.data};
  case FETCH_OMDB:
    return {...state, movies: action.payload.data.results};
  default:
    return state;
  }
}
