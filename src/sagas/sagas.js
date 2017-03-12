import { fork } from 'redux-saga/effects';
import nowPlayingSaga from './NowPlayingSaga';

function* helloSaga(){
  console.log('Sagas be rollin!');
}

export function* rootSaga(){
  yield [
    fork(nowPlayingSaga),
    fork(helloSaga)
  ]
}
