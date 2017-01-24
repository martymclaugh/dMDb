import { combineReducers } from 'redux';
import { MovieReducer } from './MovieReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  movie: MovieReducer,
  form: formReducer
});

export default rootReducer;
