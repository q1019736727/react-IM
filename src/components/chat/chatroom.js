
import React,{Component} from 'react'
import saferender from '../../decorator/saferender'
import {connect} from 'react-redux'
import './css/chatroom.scss'
import Silder from './sliderBar'
import PeopleList from './peopleList'
import {mesInit} from "@src/data/action/message";
import eventEmitter from '@src/untils/event'
import {history} from 'react-router-dom'
import Bubble from './bubble'
import {getToken} from "../../untils/token";

@connect(
    state => ({
        selctItem:state.chatselect.selctItem,
        currentFriend:state.session.currentFriend
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
        let getuser = getToken()
        if (!getuser){
            this.props.history.push('/signin')
        }else{
            this.props.mesInit()
        }
    }
    render(){
        console.log('当前选中',this.props.currentFriend)
        return(
            <div className='room-wrapper'>
                <div className='room'>
                    <Silder></Silder>
                    <PeopleList></PeopleList>
                    {/*<Bubble></Bubble>*/}
                </div>
            </div>
        )
    }

}
export default ChatRoom