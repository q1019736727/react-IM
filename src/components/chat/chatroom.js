
import React,{Component} from 'react'
import saferender from '../../decorator/saferender'
import {connect} from 'react-redux'
import {getToken} from "../../untils/token";
import './css/chatroom.scss'
import Silder from './sliderBar'
import PeopleList from './peopleList'
import {mesInit} from "@src/data/action/message";
import eventEmitter from '@src/untils/event'

@connect(
    state => ({
        selctItem:state.chatselect.selctItem
    }),
    {
        mesInit
    }
)
@saferender((error)=>{

})
class ChatRoom extends Component {
    constructor(props){
        super(props)
    }
    componentWillMount(){
        this.props.mesInit()
    }
    render(){
        let getuser = getToken()
        let username = getuser ? getuser.user.username:''
        return(
            <div className='room-wrapper'>
                <div className='room'>
                    <Silder></Silder>
                    <PeopleList username={username}></PeopleList>
                </div>
            </div>
        )
    }

}
export default ChatRoom