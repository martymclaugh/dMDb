import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUpcoming } from '../actions';
import MovieScrollList from '../components/MovieScrollList.js';

class Upcoming extends Component {
  componentWillMount(){
    this.props.fetchUpcoming()
  }
  render() {
    return (
      <div className="now-playing-container">
        <MovieScrollList title="Upcoming" data={this.props.upcoming}/>
      </div>
    )
  }
}

function mapStateToProps(state){
  const { upcoming } = state.movies
  return { upcoming }
}
export default connect(mapStateToProps, { fetchUpcoming })(Upcoming);
