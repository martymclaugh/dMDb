import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNowPlaying } from '../actions';
import MovieOption from '../components/MovieOption'
import MovieScrollList from '../components/MovieScrollList.js';

class NowPlaying extends Component {
  componentWillMount(){
    this.props.fetchNowPlaying()
  }
  render() {
    const nowPlayingItems = this.props.nowPlaying.map((movie) => {
      return (
        <MovieOption
        {...movie}/>
      )
    })
    return (
      <div className="now-playing-container">
        <MovieScrollList title="Now Playing" data={this.props.nowPlaying}/>
      </div>
    )
  }
}

function mapStateToProps(state){
  const { nowPlaying } = state.movies
  return { nowPlaying }
}
export default connect(mapStateToProps, { fetchNowPlaying })(NowPlaying);
