
import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

class Tip extends Component{
    /*
    * 这里要写props，不然获取不到props
    */
    constructor(props){
        super(props)

    }
    //设置默认props
    static defaultProps = {
        title: '成功',
        type: 'success'
    }
    render(){
        let optional = this.props[0]
        return(
            <div className={`tip ${optional.type || this.props.type}`}>
                <section>
                    {optional.title || this.props.title}
                </section>
            </div>
        )
    }
}

let tipwrapper
let timer
export function showTip() {
    if (tipwrapper) {hideTip()}
    tipwrapper = document.createElement('div')
    document.body.appendChild(tipwrapper)
    ReactDOM.render(<Tip {...arguments}/>,tipwrapper)
    if (timer){
        clearInterval(timer)
    }
    timer = setTimeout(()=>{
        hideTip()
    },2000)
}

function hideTip() {
    if (tipwrapper) {
        ReactDOM.unmountComponentAtNode(tipwrapper)
        tipwrapper.parentNode.removeChild(tipwrapper);
        tipwrapper = null
    }
}


