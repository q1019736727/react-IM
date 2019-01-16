import React, {Component} from 'react'
import './css/people.scss'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import WebIM from '@src/webIM/init'
import eventEmitter from '@src/untils/event'
import {showReceive} from "../common/receiveApply/receiveApply";
import {getRosters, setCurrentFriend} from "../../data/action/session";
import classnames from 'classnames';
@connect(
    (state) => ({
        rosters: state.session,
        currentFriend: state.session.currentFriend
    }),
    {
        getRosters
    }
)
class PeopleList extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        eventEmitter.on('presenceApply', this.handleMessage)
    }

    componentWillUnmount() {
        console.log('消除组件')
        eventEmitter.removeListener('presenceApply', this.handleMessage);
    }

    //处理好友申请
    handleMessage = (message) => {
        showReceive(message)
    }

    render() {
        /* 将修饰函数中reudx中值的改变会出发render,我们尽量可以将网络加载请求的值放在此处 */
        let {rosters} = this.props.rosters
        return (
            <div className={'people-wrapper'}>
                {rosters.length ? rosters.map((roster) => {
                    return <Bubbleitem roster={roster} key={roster.name} selectName={this.props.currentFriend}/>
                }) : <span></span>}
            </div>
        )
    }
}

export default PeopleList

@connect(
    state => ({
        currentFriend: state.session.currentFriend
    }),
    {
        setCurrentFriend
    }
)
class Bubbleitem extends Component {
    clickItem = () => {
        let options = {
            groups: this.props.roster.groups,
            jid: this.props.roster.jid,
            name: this.props.roster.name,
            subscription: this.props.roster.subscription,
        }
        this.props.setCurrentFriend(options)
    }
    render() {
        let select = this.props.selectName || {name:''}
        let url  = `/chatroom/single/${this.props.roster.name}`
        let mainClassName = classnames({
            'bubbleitem-wrapper': true,
            'active': this.props.roster.name===select.name
        });
        return (
           /* <div className={mainClassName}>
                <Link to={url} className="bubbleitem-wrapper-a" onClick={this.clickItem}>
                    <span className={'header'}>
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-user"></use>
                        </svg>
                    </span>
                    <span className={'messageinfo'}>
                        <p>{this.props.roster.name}</p>
                        <p></p>
                     </span>
                </Link>
            </div> */
        <div className={mainClassName} onClick={this.clickItem}>
            <a className="bubbleitem-wrapper-a">
                <span className={'header'}>
                    <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-user"></use>
                    </svg>
                </span>
                <span className={'messageinfo'}>
                        <p>{this.props.roster.name}</p>
                        <p></p>
                </span>
            </a>
        </div>
        );
    }
}