
import React,{Component} from 'react'
import ReactDOM from 'react-dom'

import './index.scss'

class Dialog extends Component{

    render(){
       return(
           <div className='dialog'>
               <p>加载中...</p>
           </div>
       )
    }
}

let wrapper = document.createElement('div')
let timer
const show = (props) => {
    wrapper = document.createElement('div');
    document.body.appendChild(wrapper);
    ReactDOM.render(<Dialog/>,wrapper)
    if (timer){
        clearInterval(timer)
    }
    timer = setTimeout(()=>{
        hide()
    },3000)
}


const hide = () => {
    if (wrapper) {
        ReactDOM.unmountComponentAtNode(wrapper)
        wrapper.parentNode.removeChild(wrapper);
        wrapper = null
    }
}

export default {
    show: show,
    hide: hide
}