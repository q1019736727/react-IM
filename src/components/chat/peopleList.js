import React,{Component} from 'react'
import './css/people.scss'
import {connect} from 'react-redux'
import WebIM from '@src/webIM/init'
import eventEmitter from '@src/untils/event'
import {showReceive} from "../common/receiveApply/receiveApply";
import {getRosters} from "../../data/action/session";

@connect(
    ()=>({}),
    {
        getRosters
    }
)
class PeopleList extends Component{
    constructor(props){
        super(props)
        this.state = {
            rosters:[]
        }
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
        return(
            <div className={'people-wrapper'}>
                <ul>
                    {this.state.rosters.map((friend)=>{
                        return <li>列表</li>
                    })}
                </ul>
            </div>
        )
    }
}
export default PeopleList