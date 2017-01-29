import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTopRated } from '../actions';
import MovieScrollList from '../components/MovieScrollList.js';

class TopRated extends Component {
  componentWillMount(){
    this.props.fetchTopRated()
  }
  render() {
    return (
      <div className="now-playing-container">
        <MovieScrollList title="Top Rated" data={this.props.topRated}/>
      </div>
    )
  }
}

function mapStateToProps(state){
  const { topRated } = state.movies
  return { topRated }
}
export default connect(mapStateToProps, { fetchTopRated })(TopRated);
