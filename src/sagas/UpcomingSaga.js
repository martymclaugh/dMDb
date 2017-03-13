import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../actions/actionTypes';
import * as Actions from '../actions';
import * as constants from '../api-helpers/constants';

function* fetchUpcoming() {
  try {
    const url = `${constants.UPCOMING_URL}${constants.TMDB_API_KEY}${constants.TMDB_LANGUAGE}&page=1&region=US`;
    const fetchMovies = () => axios(url)
    const moviesData = yield call(fetchMovies);
    const movieCollection = moviesData.data;
    yield put(Actions.fetchUpcomingSuccess(movieCollection));
  } catch(e) {
    yield put(Actions.fetchUpcomingFailed(e));
  }
}

function* watcher() {
  yield takeEvery(types.FETCH_UPCOMING, fetchUpcoming)
}

export default watcher;
