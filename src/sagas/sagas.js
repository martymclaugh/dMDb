import { fork } from 'redux-saga/effects';
import nowPlayingSaga from './NowPlayingSaga';
import popularSaga from './PopularSaga';
import topRatedSaga from './TopRatedSaga';
import upcomingSaga from './UpcomingSaga';
import similarSaga from './SimilarSaga.js'

export function* rootSaga(){
  yield [
    fork(nowPlayingSaga),
    fork(popularSaga),
    fork(topRatedSaga),
    fork(upcomingSaga),
    fork(similarSaga),
  ]
}
