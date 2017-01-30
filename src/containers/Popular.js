import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPopular, fetchTmdbId } from '../actions';
import MovieScrollList from '../components/MovieScrollList.js';

class Popular extends Component {
  componentWillMount(){
    this.props.fetchPopular()
  }
  static contextTypes = {
    router: PropTypes.object
  };
  showMoviePreview(movie){
    // make api call to grab imdb id,
    this.props.fetchTmdbId(movie.id).then(data => {
      // push router to '/search/:imdb_id'
      const imdbId = data.payload.data.imdb_id
      this.context.router.push(`/movie/${imdbId}`)
      window.location.reload()
    })
  }
  render() {
    return (
      <div className="now-playing-container">
        <MovieScrollList
          onSelectPoster={selectedMovie => this.showMoviePreview(selectedMovie)}
          title="Popular"
          data={this.props.popular}/>
      </div>
    )
  }
}

function mapStateToProps(state){
  const { popular } = state.movies
  return { popular }
}
export default connect(mapStateToProps, { fetchPopular, fetchTmdbId })(Popular);
