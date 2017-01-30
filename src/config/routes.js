import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../App';
import HomePage from '../containers/HomePage';
import MoviePreview from '../containers/MoviePreview';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/movie/:id" component={MoviePreview} />
  </Route>
);
