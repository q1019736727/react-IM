import React,{Component} from 'react'
import './css/people.scss'
import WebIM from '@src/webIM/init'
import eventEmitter from '@src/untils/event'

class PeopleList extends Component{
    constructor(props){
        super(props)
        console.log(this.props.username)
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
    handleMessage = (message)=>{
        console.log(message)
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