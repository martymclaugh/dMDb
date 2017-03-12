import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../actions/actionTypes';
import * as Actions from '../actions';
import * as constants from '../api-helpers/constants';

export function* fetchNowPlaying() {
  try {
    const url = `${constants.NOW_PLAYING_URL}${constants.TMDB_API_KEY}${constants.TMDB_LANGUAGE}&page=1&region=US`;
    const fetchMovies = () => axios.get(url);
    const moviesData = yield call(fetchMovies);
    const movieCollection = moviesData.data;
    yield put(Actions.fetchNowPlayingSuccess(movieCollection));
  } catch(e) {
    yield put(Actions.fetchNowPlayingFailed(e));
  }
}
function* watcher() {
  yield takeEvery(types.FETCH_NOW_PLAYING, fetchNowPlaying);
}

export default watcher;
