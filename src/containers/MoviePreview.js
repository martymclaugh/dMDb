import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchTmdbSearch } from '../actions';
import Movie from '../components/Movie';

class MoviePreview extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  componentWillMount() {
    this.props.fetchTmdbSearch(this.props.params.id);

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
  return { movie: state.movie.movie }
}

export default connect(mapStateToProps, { fetchTmdbSearch })(MoviePreview);
