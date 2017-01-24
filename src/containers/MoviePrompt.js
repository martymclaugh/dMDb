import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { fetchOmdb } from '../actions';

const renderField = ({ input, label, type, placeholder, meta: {touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={placeholder} type={type}/>
      {touched && ((error && <div className="text-help"><p style={{color: 'red'}}>{error}</p></div>) || (warning && <div className="text-help"><p style={{color: 'orange'}}>{warning}</p></div>))}
    </div>
  </div>
)

class MoviePrompt extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props){
    this.props.fetchOmdb(props).then((data) => {
      const { imdbID } = data.payload.data
      this.context.router.push(`movie/${imdbID}`)
    })
  }
  render(){
    const maxLength = max => value => value && value.length > max ? `Must be ${max} digits` : undefined
    const required = value => value ? undefined : 'Enter a Title'
    const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
    const maxLength4 = maxLength(4)
    const { handleSubmit } = this.props

    return(
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
        <div className="col-sm-12">
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchOmdb }, dispatch)
}

// connect using reduxForm the form to the container
MoviePrompt = reduxForm({
  form: 'MoviePromptForm',
  fields: ['title', 'year']
})(MoviePrompt);

// then connect using react-redux connect, connect dispatch to container
export default connect(null, mapDispatchToProps)(MoviePrompt)
