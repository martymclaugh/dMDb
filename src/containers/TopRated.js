import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchTopRated, fetchTmdbId } from '../actions';
import MovieScrollList from '../components/MovieScrollList.js';

class TopRated extends Component {
  componentWillMount(){
    this.props.fetchTopRated()
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
          title="Top Rated"
          data={this.props.topRated}/>
      </div>
    )
  }
}

function mapStateToProps(state){
  const { topRated } = state.movies
  return { topRated }
}
export default connect(mapStateToProps, { fetchTopRated, fetchTmdbId })(TopRated);
