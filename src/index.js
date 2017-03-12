import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, hashHistory } from 'react-router';
import reducers from './reducers';
import routes from './config/routes';
import promise from 'redux-promise';
import createSagaMiddleware from 'redux-saga';
import './index.css';
import { rootSaga } from './sagas/sagas';

const sagaMiddleware = createSagaMiddleware()
const middleware = [promise, sagaMiddleware];
const store = createStore(
  reducers,
  applyMiddleware(...middleware)
)
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory} routes={routes} />
  </Provider>
  , document.querySelector('#root'));
