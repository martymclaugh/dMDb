import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../App';
import MovieGreeting from '../components/MovieGreeting';
import MoviePrompt from '../containers/MoviePrompt';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={MovieGreeting} />
    <Route path="/search" component={MoviePrompt} />
  </Route>
);
