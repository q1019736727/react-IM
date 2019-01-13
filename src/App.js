import React, { Component } from 'react';
import './App.css';
import SignUp from './components/login/signup'
import SignIn from './components/login/signin'
import ChatRoom from './components/chat/chatroom'
import NotFound from './components/404/notfound'
import './webIM/init'
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
                      <Route path='/404' component={NotFound}></Route>
                      <Route path='/' component={SignUp}></Route>
                  </Switch>
              </div>
          </Router>
      </div>
    );
  }
}
export default App;

