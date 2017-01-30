import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from '../containers/NavBar';
import NowPlaying from '../containers/NowPlaying';
import Popular from '../containers/Popular';
import TopRated from '../containers/TopRated';
import Upcoming from '../containers/Upcoming';
import Footer from '../components/Footer';


class HomePage extends Component {
  render(){
    console.log(this.props)
    return(
      <div className="jumbotron">
        <div className="homepage-container">
          <NavBar/>
          <NowPlaying />
          <Popular />
          <TopRated />
          <Upcoming />
          <Footer />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {state}
}

export default connect(mapStateToProps, null)(HomePage);
