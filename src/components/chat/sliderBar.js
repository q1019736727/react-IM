
import React,{Component} from 'react'
import './css/slider.scss'
import {connect} from 'react-redux'
import {chatChange} from '@src/data/action/chatSelected'

@connect(
    state=>({
        selectItem:state.chatselect.selectItem
    }),
    {
        chatChange
    }
)
 class sliderBar extends Component{
    constructor(){
        super()
    }
    singleChat = ()=>{
        this.props.chatChange(1)
    }
    groupChat = ()=>{
        this.props.chatChange(2)
    }
    render(){
        return(
            <section className='sliderBar'>
                <header>
                    <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-user"></use>
                    </svg>
                    {this.props.selectItem}
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