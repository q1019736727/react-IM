import React,{Component} from 'react'
import saferender from '../../decorator/saferender'
import './css/bubble.scss'
import {connect} from 'react-redux'
import WebIM from '@src/webIM/init'
import {sendMessage} from "@src/data/action/message";

@connect(
    state => ({
        currentFriend:state.session.currentFriend,
        msgList:state.message.msglist
    }),
    {
        sendMessage
    }
)
@saferender(
    (error)=>{

    }
)
class Bubblue extends Component{
    shouldComponentUpdate(){
        return true
    }
    sendText = ()=>{
        let {sendMessage} = this.props
        sendMessage(this.refs.text.value,this.props.currentFriend.name)
        this.refs.text.value = ''
    }
    render() {
        let to = this.props.currentFriend.name
        let list = this.props.msgList[to] || []
        return (
            <div className={'Bubblue-wrapper'}>
                <header>
                    {this.props.currentFriend.name}
                </header>
                <main>
                    {list.map((msg)=>{
                        return <Bubblueitem msg={msg.msg} key={msg.id}/>
                    })}
                </main>
                <footer>
                    <div className={'textarea'}>
                        <textarea ref='text' name="" id="" cols="30" rows="10">

                        </textarea>
                    </div>
                    <button onClick={this.sendText}>发送</button>
                </footer>
            </div>
        );
    }
}
export default Bubblue


class Bubblueitem extends Component{
    render() {
        return (
            <div>
                {this.props.msg}
            </div>
        );
    }

}