
import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import './main.scss'
import {showTip} from '../showTip/tiptool'
import WebIM from '@src/webIM/init'

class Addfriend extends Component{
    close = ()=>{
        dismissAdd()
    }
    add = ()=>{
        WebIM.conn.subscribe({
            to: this.refs.addname.value,
            message: '加个好友呗!'
        })
        showTip({
            title:'发送成功',
            type:'success'
        })
        dismissAdd()
    }
    render(){
        return(
            <div className='addfriend-wrapper'>
                <section className='addfriend'>
                    <header>
                        <span>添加好友</span>
                        <span onClick={this.close}>x</span>
                    </header>
                    <main>
                        <input ref='addname' type="text" placeholder='用户名'/>
                    </main>
                    <footer>
                        <button onClick={this.add}>添加</button>
                    </footer>
                </section>
            </div>
        )
    }
}

let dom
export function showAdd() {
    if (dom) {
        dismissAdd()
    }
    dom = document.createElement('div')
    document.body.appendChild(dom)
    ReactDOM.render(<Addfriend/>,dom)
}

export function dismissAdd() {
    if (dom){
        ReactDOM.unmountComponentAtNode(dom)
        dom.parentNode.removeChild(dom)
        dom = null
    }
}