import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { fetchOmdb } from '../actions/index';

class MoviePrompt extends Component {
  render(){
    const { handleSubmit, fields } = this.props
    const { title, year } = this.props.fields
    return(
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
        <div className="col-sm-12">
          <form>
            <h1>Search For A Movie</h1>
            <div className="form-group">
              <label>Movie Title:</label>
              <input
                type="text"
                className="form-control"
                {...title}/>
              <div className="text-help">
                {title.touched ? title.error : ''}
              </div>
            </div>
            <div className="form-group">
              <label>Year (optional):</label>
              <input
                maxLength="4"
                placeholder="optional"
                type="text"
                className="form-control"
                {...year}/>
                <div className="text-help">
                  {year.touched ? year.error : ''}
                </div>
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

function validate(values){
  const errors = {};
  if(!values.title){
    errors.title = 'Enter a Title';
  }
  if(values.year){
    errors.title = 'Enter a Year'
  }
}

export default reduxForm({
  form: 'MoviePromptForm',
  fields: ['title', 'year'],
  validate
}, null, fetchOmdb)(MoviePrompt);
