import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../actions/actionTypes';
import * as Actions from '../actions';
import * as constants from '../api-helpers/constants';

function* fetchTmdbSearch({ payload }) {
  const searchTerm = payload
  if (searchTerm.length === 0) {
    // need to fix this so that when search query gets deleted, doesn't
    // display error and clears out smart search div below searchbar
    yield put(Actions.fetchTmdbSearchFailed('Nothing to search!'))
  }
  try {
    const url = `${constants.TMDB_URL_SEARCH}${constants.TMDB_API_KEY}${constants.TMDB_LANGUAGE}&query=${searchTerm}${constants.TMDB_SEARCH_PARAMS}`;
    const fetchMovie = () => axios(url);
    const searchResults = yield call(fetchMovie);
    const movieData = searchResults.data;
    yield put(Actions.fetchTmdbSearchSuccess(movieData));
  } catch (e) {
    yield put(Actions.fetchTmdbSearchFailed(e))
  }
}

function* watcher() {
  yield takeEvery(types.FETCH_TMDB, fetchTmdbSearch)
}

export default watcher;
