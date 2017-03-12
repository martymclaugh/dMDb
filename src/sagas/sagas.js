import { fork } from 'redux-saga/effects';
import nowPlayingSaga from './NowPlayingSaga';
import popularSaga from './PopularSaga';
import topRatedSaga from './TopRatedSaga';

export function* rootSaga(){
  yield [
    fork(nowPlayingSaga),
    fork(popularSaga),
    fork(topRatedSaga),
  ]
}
