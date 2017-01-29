import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPopular } from '../actions';
import MovieScrollList from '../components/MovieScrollList.js';

class Popular extends Component {
  componentWillMount(){
    this.props.fetchPopular()
  }
  render() {
    return (
      <div className="now-playing-container">
        <MovieScrollList title="Popular" data={this.props.popular}/>
      </div>
    )
  }
}

function mapStateToProps(state){
  const { popular } = state.movies
  return { popular }
}
export default connect(mapStateToProps, { fetchPopular })(Popular);
