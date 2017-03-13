import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../actions/actionTypes';
import * as Actions from '../actions';
import * as constants from '../api-helpers/constants';

function* fetchSimilar({ payload }){
  const id = payload
  if (id === undefined){
    yield put(Actions.fetchSimilarFailed('Error: No Movie ID'));
  } else {
    try {
      const url = `${constants.SIMILAR_URL}${id}/similar?api_key=${constants.TMDB_API_KEY}${constants.TMDB_LANGUAGE}&page=1`;
      const fetchMovies = () => axios(url)
      const moviesData = yield call(fetchMovies);
      const movieCollection = moviesData.data;
      yield put(Actions.fetchSimilarSuccess(movieCollection));
    } catch (e) {
      yield put(Actions.fetchSimilarFailed(e));
    }
  }
}

function* watcher() {
  yield takeEvery(types.FETCH_SIMILAR, fetchSimilar);
}

export default watcher;
