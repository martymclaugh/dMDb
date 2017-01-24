import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../App';
import MovieGreeting from '../components/MovieGreeting';
import MoviePrompt from '../containers/MoviePrompt';
import MoviePreview from '../containers/MoviePreview';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={MovieGreeting} />
    <Route path="/search" component={MoviePrompt} />
    <Route path="/movie/:id" component={MoviePreview} />
  </Route>
);
