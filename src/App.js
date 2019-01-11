import React, { Component } from 'react';
import './App.css';
import SignUp from './components/login/signup'
import {Router,Route} from 'react-router'


class App extends Component {
  render() {
    return (
      <div className="App">
          <SignUp/>
      </div>
    );
  }
}

export default class Main extends Component{
    render(){
        return(
            <div>
                <App></App>
            </div>
        )
    }
}
{/*<Router>*/}
    {/*<div>*/}
        {/*<Route path='/' component={App}/>*/}

    {/*</div>*/}
{/*</Router>*/}