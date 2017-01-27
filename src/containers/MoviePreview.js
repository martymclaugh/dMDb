import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  fetchTmdbId,
  fetchOmdbId,
  fetchYoutubeTrailer,
  fetchImdbRatings
} from '../actions';
import Movie from '../components/Movie';

class MoviePreview extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  componentWillMount() {
    const imdbId = this.props.params.id
    // grab OMDB data
    this.props.fetchOmdbId(imdbId)
    // grab TMDB data
    this.props.fetchTmdbId(imdbId).then(data => {
      const response = data.payload.data
      // grab title and year for youtube trailer search
      const title = response.title
      const year = response.release_date.slice(0, 4)

      // send to action for youtube search trailer
      this.props.fetchYoutubeTrailer({year, title})
    })
    // grab imdb ratings
    this.props.fetchImdbRatings(imdbId)
  }
  render() {
    const { movie } = this.props
    if (!movie){
      return <div>Loading...</div>
    } else {
      return (
        <div>
          <Movie {...movie}/>
        </div>
      )
    }
  }
}

function mapStateToProps(state){
  const {
    tmdbMovie,
    omdbMovie,
    trailer,
    ratings
  } = state.movies

  return {
    tmdbMovie,
    omdbMovie,
    trailer,
    ratings
  }
}

export default connect(mapStateToProps, {
   fetchOmdbId,
   fetchTmdbId,
   fetchYoutubeTrailer,
   fetchImdbRatings
})(MoviePreview);
