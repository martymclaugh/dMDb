import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchOmdbId } from '../actions';
import Movie from '../components/Movie';

class MoviePreview extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  componentWillMount() {
    this.props.fetchOmdbId(this.props.params.id);
  }
  render() {
    const { movie } = this.props
    console.log(movie, 'MOVIE')
    if (!movie){
      console.log('Loading')
      return <div>Loading...</div>
    } else {
      console.log(movie.Title)
      return (
        <div>
        <Movie {...this.props.movie}/>
        </div>
      )
    }
  }
}

function mapStateToProps(state){
  return { movie: state.movie.movie }
}

export default connect(mapStateToProps, { fetchOmdbId })(MoviePreview);
