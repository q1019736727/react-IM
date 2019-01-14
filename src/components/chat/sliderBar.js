
import React,{Component} from 'react'
import './css/slider.scss'


export default class sliderBar extends Component{
    render(){
        return(
            <section className='sliderBar'>
                <header>
                    <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-user"></use>
                    </svg>
                    <p className='username'>username</p>
                </header>
                <div className='singleChat'>
                    <svg className="icon active" aria-hidden="true">
                        <use xlinkHref="#icon-chat"></use>
                    </svg>
                </div>
                <div className='groupChat'>
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