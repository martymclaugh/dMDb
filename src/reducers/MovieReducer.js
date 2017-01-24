import { FETCH_OMDB } from '../actions/index';

const INITIAL_STATE = { movie: null, ratings: null };
export const MovieReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case FETCH_OMDB:
    return {...state, movie: action.payload.data};
  }
  return state;
}
