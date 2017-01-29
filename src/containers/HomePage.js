import React, { Component } from 'react';
import NavBar from '../containers/NavBar';
import NowPlaying from '../containers/NowPlaying';
import Popular from '../containers/Popular';

export default class HomePage extends Component {
  render(){
    return(
      <div className="jumbotron">
        <NavBar/>
        <NowPlaying />
        <Popular />
      </div>
    )
  }
}
