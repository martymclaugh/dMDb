import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchOmdb } from '../actions';

class MoviePreview extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  componentWillMount() {
    console.log(this.props)
    // this.props.fetchOmdb(this.props.params.id);
  }
  render() {
    return (
      <div>imdb Movie ID: {this.props.params.id}</div>
    )
  }
}

function mapStateToProps(state){
  return { movie: state.movie.movie }
}

export default connect(mapStateToProps, { fetchOmdb })(MoviePreview);
