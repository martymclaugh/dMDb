import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../actions/actionTypes';
import * as Actions from '../actions';
import * as constants from '../api-helpers/constants';

// export function fetchTmdbId(id){
//   const url = `${TMDB_ID_SEARCH}${id}?api_key=${TMDB_API_KEY}${TMDB_LANGUAGE}`;
//   const request = axios(url);
//   return {
//     type: types.FETCH_TMDB_ID,
//     payload: request
//   }
// }

function* fetchTmdbId({ payload }) {
  const id = payload
  try {
    const url = `${constants.TMDB_ID_SEARCH}${id}?api_key=${constants.TMDB_API_KEY}${constants.TMDB_LANGUAGE}`;
    const fetchMovie = () => axios(url);
    const res = yield call(fetchMovie);
    const movieData = res.data;
    yield put(Actions.fetchTmdbIdSuccess(movieData));
  } catch (e) {
    yield put(Actions.fetchTmdbIdFailed(e));
  }
}

function* watcher() {
  yield takeEvery(types.FETCH_TMDB_ID, fetchTmdbId);
}

export default watcher;
