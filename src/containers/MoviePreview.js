import React, { Component, PropTypes } from 'react';

class MoviePreview extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  render() {
    console.log(this.context.router)
    return (
      <div>imdb Movie ID: {this.props.params.id}</div>
    )
  }
}

export default MoviePreview;
