
import React,{Component} from 'react'
import './index.scss'
import saferender from '../../decorator/saferender'
import Dialog from '../common/dialog/dialog'
import WebIM from '@src/webIM/init'
import {showTip} from '../common/showTip/tiptool'
import {history, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {loginAction} from '@src/data/action/sign'
import {setToken} from "../../untils/token";

@connect(
    state => ({
        regState: state.sign.regState
    }),
    {
        loginAction
    }
)
// @saferender 相当于已经执行了这个函数(不用加())
// @saferender() 相当于执行renturn的函数
@saferender({
    errorHandler: (error) => {
        //错误处理
    }
})
class signin extends Component{
    constructor(){
        super()
        this.state = {
            name:'chiuyung'
        }

        this.signin = this.signin.bind(this)
    }

    signin = () => {
        let username = this.refs.username.value.trim()
        let password = this.refs.password.value.trim()
        if (!username || !password) {
            showTip({
                title: '请将信息填写完整',
                type: 'error'
            })
            return
        }
        let options = {
            user: username,
            pwd: password,
            appKey: 'seventcq#react-im',
            apiUrl: 'http://a1.easemob.com'
        }

        let {loginAction} = this.props
        loginAction(options).then((data)=>{
            showTip({
                title: '登录成功',
                type: 'success'
            })
            setToken(data)
            this.props.history.push('/chatroom')
        }).catch(e => {
            showTip({
                title: '未知错误',
                type: 'error'
            })
        })
    }
    render(){
        return(
            <div className='BG'>
                <section className='sign-wrapper'>
                    <h3>登录</h3>
                    <input ref='username' type="text" name='username' placeholder='用户名'/>
                    <input ref='password' type="password" name='password' placeholder='密码'/>
                    <button onClick={this.signin}>登录</button>
                    <p>没有账号，
                        <Link to="/signup">注册</Link>
                    </p>
                </section>
            </div>
        )
    }
}
export default  signin