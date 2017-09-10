import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../actions/actionTypes';
import * as Actions from '../actions';
import * as constants from '../api-helpers/constants';

function* fetchPopular() {
  try {
    const url = `${constants.POPULAR_URL}${constants.TMDB_API_KEY}${constants.TMDB_LANGUAGE}&page=1`;
    const fetchMovies = () => axios(url);
    const moviesData = yield call(fetchMovies);
    const movieCollection = moviesData.data
    yield put(Actions.fetchPopularSuccess(movieCollection))
  } catch(e) {
    yield put(Actions.fetchPopularFailed(e))
  }
}

function* watcher() {
  yield takeEvery(types.FETCH_POPULAR, fetchPopular)
}

export default watcher;
