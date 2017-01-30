import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchSimilar, fetchTmdbId } from '../actions';
import MovieScrollList from '../components/MovieScrollList.js';

class Similar extends Component {
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
          title="Similar Titles"
          data={this.props.similar}/>
      </div>
    )
  }
}

function mapStateToProps(state){
  const { similar } = state.movies
  return { similar }
}
export default connect(mapStateToProps, { fetchSimilar, fetchTmdbId })(Similar);
