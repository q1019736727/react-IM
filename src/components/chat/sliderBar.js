
import React,{Component} from 'react'
import './css/slider.scss'
import {connect} from 'react-redux'
import chatChange from '@src/data/action/chatSelected'

@connect(
    state=>({
        selctItem:state.chatselect.selctItem
    }),
    {
        chatChange
    }
)
 class sliderBar extends Component{
    constructor(){
        super()
        this.singleChat = this.singleChat.bind(this)
        this.groupChat = this.groupChat.bind(this)
    }
    singleChat = ()=>{
        chatChange(1)
    }
    groupChat = ()=>{
        chatChange(2)
    }
    render(){
        return(
            <section className='sliderBar'>
                <header>
                    <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-user"></use>
                    </svg>
                    <p className='username'>username</p>
                </header>
                <div className='singleChat' onClick={this.singleChat}>
                    <svg className="icon active" aria-hidden="true">
                        <use xlinkHref="#icon-chat"></use>
                    </svg>
                </div>
                <div className='groupChat' onClick={this.groupChat}>
                    <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-chatbubbles"></use>
                    </svg>
                </div>
                <div className='setting active'>
                    <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-setting"></use>
                    </svg>
                </div>
            </section>
        )
    }
}
export default sliderBar