import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  fetchTmdbId,
  fetchOmdbId,
  fetchYoutubeTrailer,
  fetchImdbRatings,
  fetchSimilar,
  createMovieView
} from '../actions';
import MovieDetails from '../components/MovieDetails';
import Similar from './Similar';
import Footer from '../containers/Footer';
import Loading from 'react-loading';

class MoviePreview extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  componentWillMount() {
    const imdbId = this.props.params.id
    // grab OMDB data
    this.props.fetchOmdbId(imdbId).then(data => {
      this.props.createMovieView(data.payload.data);
    })
    // grab TMDB data
    this.props.fetchTmdbId(imdbId).then(data => {
      const response = data.payload.data
      // grab title and year for youtube trailer search
      const title = response.title
      const year = response.release_date.slice(0, 4)
      // send to action for youtube search trailer
      this.props.fetchYoutubeTrailer({year, title})
      // send to action for similar titles
      this.props.fetchSimilar(response.id)
      // send to action to create viewed object
    })
    // grab imdb ratings
    this.props.fetchImdbRatings(imdbId)
  }
  goToHome(){
    this.context.router.push('/')
  }
  render() {
    const { omdbMovie, tmdbMovie, ratings, trailer} = this.props
    const { router } = this.context
    const details = { omdbMovie, tmdbMovie }
    if (!omdbMovie && !tmdbMovie.id && !ratings && !trailer){
      return <Loading type='bars' color='#0D5746'/>
    } else {
      return (
        <div className="jumbotron">
          <div className="search-bar">
            <img onClick={() => this.goToHome()} className="dmdb-logo" src={('https://i.imgur.com/2zBPGgc.png')} alt="dmdb"/>
          </div>
          <MovieDetails
            trailer={trailer}
            ratings={ratings}
            router={router}
            {...details}/>
          <Similar id={tmdbMovie.id}/>
          <Footer />
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
   fetchSimilar,
   createMovieView
})(MoviePreview);
