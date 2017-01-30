import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  fetchTmdbId,
  fetchOmdbId,
  fetchYoutubeTrailer,
  fetchImdbRatings,
  fetchSimilar
} from '../actions';
import MovieDetails from '../components/MovieDetails';
import Similar from './Similar';

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
      this.props.fetchSimilar(response.id)
    })
    // grab imdb ratings
    this.props.fetchImdbRatings(imdbId)
  }
  goToHome(){
    this.context.router.push('/home')
  }
  render() {
    const { omdbMovie, tmdbMovie, ratings, trailer} = this.props
    const { router } = this.context
    const details = { omdbMovie, tmdbMovie }
    if (!omdbMovie && !tmdbMovie.id && !ratings && !trailer){
      return <div>Loading...</div>
    } else {
      return (
        <div className="jumbotron">
          <div className="search-bar">
            <img onClick={() => this.goToHome()} className="dmdb-logo" src={('http://i.imgur.com/2zBPGgc.png')} alt="dmdb"/>
          </div>
          <MovieDetails
            trailer={trailer}
            ratings={ratings}
            router={router}
            {...details}/>
          <Similar id={tmdbMovie.id}/>
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
   fetchImdbRatings,
   fetchSimilar
})(MoviePreview);
