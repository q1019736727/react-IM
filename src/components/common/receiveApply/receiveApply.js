
import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import WebIM from '@src/webIM/init'

class Receive extends Component{
    constructor(props){
        super(props)
        console.log(this.props)
    }
    acceptHandle = ()=>{
        /*同意添加好友*/
        WebIM.conn.subscribed({
            to: this.props.from,
            message : '[resp:true]'
        });
        closeReceive()
    }
    unacceptHandle = ()=>{
        /*拒绝添加好友*/
        WebIM.conn.unsubscribed({
            to: this.props.from,
            message : 'rejectAddFriend'
        });
        closeReceive()
    }
    render() {
        return (
            <div className={'receive-wrapper'}>
                <div className={'receive'}>
                    <header>添加好友请求</header>
                    <main>{this.props.from} : {this.props.status}</main>
                    <footer>
                        <button onClick={this.unacceptHandle}>拒绝</button>
                        <button onClick={this.acceptHandle}>同意</button>
                    </footer>
                </div>
            </div>
        );
    }
}

let dom
export function showReceive(message) {
    if (dom){
        closeReceive()
    }
    dom = document.createElement('div')
    document.body.appendChild(dom)
    ReactDOM.render(<Receive {...message}/>,dom)
}

export function closeReceive() {
    if (dom){
        ReactDOM.unmountComponentAtNode(dom)
        dom.parentNode.removeChild(dom)
        dom = null
    }
}