import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, hashHistory } from 'react-router';
import reducers from './reducers';
import routes from './config/routes';
import promise from 'redux-promise';
import './index.css';

const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory} routes={routes} />
  </Provider>
  , document.querySelector('#root'));
