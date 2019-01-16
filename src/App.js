import React, { Component } from 'react';
import './App.css';
import SignUp from './components/login/signup'
import SignIn from './components/login/signin'
import ChatRoom from './components/chat/chatroom'
import './webIM/init'
import store from './data/create'
import {Provider} from 'react-redux'
import {getToken} from "./untils/token";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    HashRouter
} from 'react-router-dom';

class App extends Component {
    componentWillMount(){
        let getuser = getToken()
        if (!getuser){
            this.props.history.push('/signin')
        }else{
            this.props.mesInit()
        }
    }
    render() {
        return (
            <div className="main">
                {this.props.children}
            </div>
        );
    }
}

export default class Main extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Route exact path="/" component = {App}></Route>
                        <Route path='/signin' component={SignIn}></Route>
                        <Route path='/signup' component={SignUp}></Route>
                        <Route path='/chatroom' component={ChatRoom}>
                            /*<Route path='/:chatType/:chatId' component={ChatRoom}></Route>*/
                        </Route>
                    </div>
                </Router>
            </Provider>
        )
    }
}
