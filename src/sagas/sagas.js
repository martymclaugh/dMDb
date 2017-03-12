import { fork } from 'redux-saga/effects';
import nowPlayingSaga from './NowPlayingSaga';
import popularSaga from './PopularSaga';

export function* rootSaga(){
  yield [
    fork(nowPlayingSaga),
    fork(popularSaga),
  ]
}
