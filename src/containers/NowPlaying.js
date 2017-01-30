import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchNowPlaying, fetchTmdbId } from '../actions';
import MovieScrollList from '../components/MovieScrollList.js';

class NowPlaying extends Component {
  componentWillMount(){
    this.props.fetchNowPlaying()
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
          title="Now Playing"
          data={this.props.nowPlaying}/>
      </div>
    )
  }
}

function mapStateToProps(state){
  const { nowPlaying } = state.movies
  return { nowPlaying }
}
export default connect(mapStateToProps, { fetchNowPlaying, fetchTmdbId })(NowPlaying);
