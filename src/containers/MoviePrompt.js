import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class MoviePrompt extends Component {
  render(){
    const { fields: { title, year }} = this.props;
    console.log(this.props.title)
    return(
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
        <div className="col-sm-12">
          <form>
            <h1>Search For A Movie</h1>
            <div className="form-group">
              <label>Movie Title:</label>
              <input type="text" className="form-control" {...title}/>
            </div>
            <div className="form-group">
              <label>Year (optional):</label>
              <input placeholder="optional" type="text" className="form-control" {...year}/>
            </div>
            <div className="form-group col-sm-4 col-sm-offset-4">
              <button className="btn btn-block btn-primary" type="submit">Continue</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}


export default reduxForm({
  form: 'MoviePromptForm',
  fields: ['title', 'year']
}, null, null)(MoviePrompt);
