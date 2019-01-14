
import React,{Component} from 'react'
import saferender from '../../decorator/saferender'
import {connect} from 'react-redux'

@connect(
    state => ({
        registState:state.sign.regState
    })
)
@saferender((error)=>{

})
class ChatRoom extends Component {
    render(){
        return(
            <div>聊天室{this.props.registState}</div>
        )
    }

}
export default ChatRoom