import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { fetchOmdb } from '../actions/index';

const renderField = ({ input, label, type, placeholder, meta: {touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={placeholder} type={type}/>
      {touched && ((error && <div className="text-help"><p style={{color: 'red'}}>{error}</p></div>) || (warning && <div className="text-help"><p style={{color: 'red'}}>{warning}</p></div>))}
    </div>
  </div>
)

class MoviePrompt extends Component {
  render(){
    const maxLength = max => value => value && value.length > max ? `Must be ${max} digits` : undefined
    const required = value => value ? undefined : 'Required'
    const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
    const maxLength4 = maxLength(4)
    const { handleSubmit } = this.props


    return(
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
        <div className="col-sm-12">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Search For A Movie</h1>
            <div className="form-group">
              <label>Movie Title:</label>
              <Field
                name="title"
                type="text"
                component={renderField}
                label="Title"
                placeholder="Batman"
                validate={[ required ]} />
            </div>
            <div className="form-group">
              <label>Year (optional):</label>
              <Field
                name="year"
                type="text"
                component={renderField}
                label="Year"
                placeholder="optional"
                validate={[ number, maxLength4 ]} />
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
