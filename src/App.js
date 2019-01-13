import React, { Component } from 'react';
import './App.css';
import SignUp from './components/login/signup'
import SignIn from './components/login/signin'
import ChatRoom from './components/chat/chatroom'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    withRouter
} from 'react-router-dom';

class App extends Component {
  render() {
      return (
      <div className="App">
          <Router>
              <div>
                  <Switch>
                      <Route path='/signin' component={SignIn}></Route>
                      <Route path='/chatroom' component={ChatRoom}></Route>
                      <Route path='/' component={SignUp}></Route>
                  </Switch>
              </div>
          </Router>
      </div>
    );
  }
}

 class Main extends Component{
    render(){
        return(
            <div>
                <App></App>
            </div>
        )
    }
}
export default Main;

