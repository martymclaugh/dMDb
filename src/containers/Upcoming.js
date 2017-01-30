import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchUpcoming, fetchTmdbId } from '../actions';
import MovieScrollList from '../components/MovieScrollList.js';

class Upcoming extends Component {
  componentWillMount(){
    this.props.fetchUpcoming()
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
          title="Upcoming"
          data={this.props.upcoming}/>
      </div>
    )
  }
}

function mapStateToProps(state){
  const { upcoming } = state.movies
  return { upcoming }
}
export default connect(mapStateToProps, { fetchUpcoming, fetchTmdbId })(Upcoming);
