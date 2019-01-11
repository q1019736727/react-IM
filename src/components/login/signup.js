
import React,{Component} from 'react'
import './index.scss'
import saferender from '../../decorator/saferender'
import Dialog from '../common/dialog/dialog'
import {showTip} from '../common/showTip/tiptool'

// @saferender 相当于已经执行了这个函数(不用加())
// @saferender() 相当于执行renturn的函数
@saferender({
    errorHandler: (error) => {
       //错误处理
    }
})
class signup extends Component{
    constructor(){
        super()
        this.state = {
            name:'chiuyung'
        }

        this.signup = this.signup.bind(this)
    }

    signup = () => {
        showTip({
            title:'注册成功',
            type: 'success'
        })
        // Dialog.show()
        // let timer = setTimeout(()=>{
        //     Dialog.hide()
        //     clearInterval(timer)
        //     showTip({
        //         title:'注册成功',
        //         type: 'success'
        //     })
        // },3000)
    }
    componentWillMount(){
        throw new Error()
    }
    render(){
        return(
            <div className='BG'>
                <section className='sign-wrapper'>
                    <h3>注册</h3>
                    <input ref='username' type="text" name='username' placeholder='用户名'/>
                    <input ref='password' type="password" name='password' placeholder='密码'/>
                    <input ref='nickname' type="text" name='nickname' placeholder='昵称'/>
                    <button onClick={this.signup}>注册</button>
                    <p>已有账号，
                        <a>登录</a>
                    </p>
                </section>
            </div>
        )
    }
}
export default  signup