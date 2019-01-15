import React,{Component} from 'react'
import './css/people.scss'
import {connect} from 'react-redux'
import WebIM from '@src/webIM/init'
import eventEmitter from '@src/untils/event'
import {showReceive} from "../common/receiveApply/receiveApply";
import {getRosters} from "../../data/action/session";

@connect(
    (state)=>({
        rosters:state.session
    }),
    {
        getRosters
    }
)
class PeopleList extends Component{
    constructor(props){
        super(props)
    }
    componentWillMount(){
        eventEmitter.on('presenceApply',this.handleMessage)
    }
    componentWillUnmount() {
        eventEmitter.removeListener('presenceApply', this.handleMessage);
    }
    //处理好友申请
    handleMessage = (message)=>{
        showReceive(message)
    }
    render(){
        /* 将修饰函数中reudx中值的改变会出发render,我们尽量可以将网络加载请求的值放在此处 */
        let{rosters} = this.props.rosters
        return(
            <div className={'people-wrapper'}>
                {rosters.length ? rosters.map((roster)=>{
                    return <Bubbleitem {...roster} key={roster.name}/>
                }):<span>暂无好友</span> }
            </div>
        )
    }
}
export default PeopleList

class Bubbleitem extends Component{
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        );
    }
}