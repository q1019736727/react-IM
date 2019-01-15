import React, { Component } from 'react';
import './App.css';
import SignUp from './components/login/signup'
import SignIn from './components/login/signin'
import ChatRoom from './components/chat/chatroom'
import './webIM/init'
import store from './data/create'
import {Provider} from 'react-redux'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

class App extends Component {
  render() {
      return (
          <Provider store={store}>
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
          </Provider>
    );
  }
}
export default App;

