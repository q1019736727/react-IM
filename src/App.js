import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './components/login/signup'


class App extends Component {
  render() {
    return (
      <div className="App">
          <SignUp/>
      </div>
    );
  }
}

export default App;
