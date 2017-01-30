import React, { Component } from 'react';
import { Link } from 'react-router';

class MovieGreeting extends Component {
  render(){
    return (
      <div className="jumbotron col-sm-12 text-center">
        <h1>movieD</h1>
        <p className="lead">Get the rating demographics from iMDB</p>
        <div className="form-group col-sm-4 col-sm-offset-4">
          <Link to="/home" className="btn btn-block btn-primary">
              Continue
          </Link>
        </div>
      </div>
    )
  }
}

export default MovieGreeting;
