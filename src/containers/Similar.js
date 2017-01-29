import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSimilar } from '../actions';
import MovieScrollList from '../components/MovieScrollList.js';

class Similar extends Component {
  render() {
    return (
      <div className="now-playing-container">
        <MovieScrollList title="Similar Titles" data={this.props.similar}/>
      </div>
    )
  }
}

function mapStateToProps(state){
  const { similar } = state.movies
  return { similar }
}
export default connect(mapStateToProps, { fetchSimilar })(Similar);
