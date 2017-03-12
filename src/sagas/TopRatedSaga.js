import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../actions/actionTypes';
import * as Actions from '../actions';
import * as constants from '../api-helpers/constants';

// export function fetchTopRated(){
//   const url = `${TOP_RATED_URL}${TMDB_API_KEY}${TMDB_LANGUAGE}&page=1`
//   const request = axios(url)
//   return {
//     type: types.FETCH_TOP_RATED,
//     payload: request
//   }
// }

export function* fetchTopRated() {
  try {
    const url = `${constants.TOP_RATED_URL}r${constants.TMDB_API_KEY}${constants.TMDB_LANGUAGE}&page=1`;
    const fetchMovies = () => axios.get(url);
    const moviesData = yield call(fetchMovies);
    const movieCollection = moviesData.data;
    yield put(Actions.fetchTopRatedSuccess(movieCollection));
  } catch(e) {
    yield put(Actions.fetchTopRatedFailed(e))
  }
}

function* watcher() {
  yield takeEvery(types.FETCH_TOP_RATED, fetchTopRated);
}

export default watcher;
