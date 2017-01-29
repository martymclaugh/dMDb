import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import SearchBar from './SearchBar';
import { fetchTmdbSearch, fetchTmdbId } from '../actions';
import SearchList from '../components/SearchList';
import MovieOption from '../components/MovieOption'


class NavBar extends Component {
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
    this.props.fetchTmdbId(movie.id).then(data => {
      // push router to '/search/:imdb_id'
      const imdbId = data.payload.data.imdb_id
      this.context.router.push(`/movie/${imdbId}`)
    })
  }
  render(){
    const { movies } = this.props.movies
    return(
      <div className="text-center">
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
    )
  }
}

function mapStateToProps({ movies }){
  return { movies }
}

export default connect(mapStateToProps, { fetchTmdbSearch, fetchTmdbId })(NavBar)
