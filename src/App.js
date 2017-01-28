import React, { Component } from 'react';
class App extends Component {
  render() {
    return (
      <div className="main-container">
        Main Container
        {this.props.children}
      </div>
    );
  }
}

export default App;
