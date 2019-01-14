
import React,{Component} from 'react'
import saferender from '../../decorator/saferender'
import {connect} from 'react-redux'
import {getToken} from "../../untils/token";
import './css/chatroom.scss'
import Silder from './sliderBar'

@connect(
    state => ({
        selctItem:state.chatselect.selctItem
    })
)
@saferender((error)=>{

})
class ChatRoom extends Component {
    render(){
        return(
            <div className='room-wrapper'>
                <div className='room'>
                    <Silder></Silder>
                </div>
            </div>
        )
    }

}
export default ChatRoom