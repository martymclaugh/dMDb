import React, { Component } from 'react';
class App extends Component {
  render() {
    return (
      <div>
        Main Container
        {this.props.children}
      </div>
    );
  }
}

export default App;
