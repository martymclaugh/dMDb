import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field } from 'redux-form';
import _ from 'lodash';

import SearchBar from './SearchBar';
import { fetchTmdbSearch } from '../actions';
import SearchList from '../components/SearchList';
import MovieOption from '../components/MovieOption'


class MoviePrompt extends Component {
  constructor(props){
    super(props);
    this.state = { term: ''};
  }
  static contextTypes = {
    router: PropTypes.object
  };
  movieSearch(term){
    // fetch tmdb list of movies
    this.props.fetchTmdbSearch(term)
  }
  onInputChange(term) {
    const movieSearch = _.debounce((term) => {this.movieSearch(term) }, 200)
    this.setState({term});
    movieSearch(term);
  }
  showMoviePreview(movie){
    // make api call to grab imdb id,
    // push router to '/search/:imdb_id'
    console.log(movie)
  }
  render(){
    const { movies } = this.props.movies
    return(
      <div className="jumbotron text-center">
        <div className="col-sm-12">
        <div className="search-bar">
          <input
            className="search-input"
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)}/>
            <SearchList
              onSelectMovie={selectedMovie => this.showMoviePreview(selectedMovie)}
              movies={movies}/>
        </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ movies }){
  return { movies }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTmdbSearch }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(MoviePrompt)
