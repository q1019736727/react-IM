
import React,{Component} from 'react'
import './css/slider.scss'
import {connect} from 'react-redux'
import {chatChange} from '@src/data/action/chatSelected'
import {showAdd} from'../common/addfriend/addfriend'
import {getToken} from "@src/untils/token";

@connect(
    state=>({
        selectItem:state.chatselect.selectItem
    }),
    {
        chatChange
    }
)
 class sliderBar extends Component{
    constructor(props){
        super(props)
            this.state = {
                selectindex: this.props.selectItem,
                singleChat:true
            }
        }
        singleChat = ()=>{
            this.props.chatChange(1).then((value)=>{
                this.setState({
                    selectindex:value,
                    singleChat:true
                })
        })
    }
    groupChat = ()=>{
        this.props.chatChange(2).then((value)=>{
            this.setState({
                selectindex:value,
                singleChat:false
            })
        })
    }
    addFriend = ()=> {
        showAdd()
    }
    render(){
        let getuser = getToken()
        let username = getuser ? getuser.user.username:'请重新登录'
        return(
            <section className='sliderBar'>
                <header>
                    <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-user"></use>
                    </svg>
                    <p className='username'>{username}</p>
                </header>
                <div className='singleChat' onClick={this.singleChat}>
                    <svg className={`icon ${this.state.singleChat === true ? 'active':''}`} aria-hidden="true">
                        <use xlinkHref="#icon-chat"></use>
                    </svg>
                </div>
                <div className='groupChat' onClick={this.groupChat}>
                    <svg className={`icon ${this.state.singleChat === false ? 'active':''}`} aria-hidden="true">
                        <use xlinkHref="#icon-chatbubbles"></use>
                    </svg>
                </div>
                <div className='setting active' onClick={this.addFriend}>
                    <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-setting"></use>
                    </svg>
                </div>
            </section>
        )
    }
}
export default sliderBar