import React,{Component} from 'react'
import saferender from '../../decorator/saferender'
import './css/bubble.scss'
import {connect} from 'react-redux'
import WebIM from '@src/webIM/init'
import {sendMessage} from "@src/data/action/message";
import classnames from 'classnames'
import {getToken} from "@src/untils/token";

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
                        return <Bubblueitem message={msg} key={msg.id}/>
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
        let getuser = getToken()
        let username = getuser ? getuser.user.username:''
        let mainClassName = classnames({
            Bubblueitemwrapper: true,
            right: username === this.props.message.from
        })
        return (
            <div className={mainClassName}>
                <span className={'header'}>
                      <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-user"></use>
                    </svg>
                </span>
                <div className={'content-wrapper'}>
                    <p className={'name'}>
                        {this.props.message.from}
                    </p>
                    <div className={'content'}>
                        {this.props.message.msg}
                    </div>
                </div>
            </div>
        );
    }

}