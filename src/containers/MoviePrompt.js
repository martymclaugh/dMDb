import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class MoviePrompt extends Component {
  render(){
    return(
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
        <div className="col-sm-12">
          <form>
            <h1>Search For A Movie</h1>
            <div className="form-group">
              <label> Movie Title: </label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label> Movie Year (optional): </label>
              <input type="text" className="form-control" />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default MoviePrompt;
