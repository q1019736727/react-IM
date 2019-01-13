
import React,{Component} from 'react'
import saferender from '../../decorator/saferender'

@saferender((error)=>{

})
class ChatRoom extends Component {
    render(){
        return(
            <div>聊天室</div>
        )
    }

}
export default ChatRoom