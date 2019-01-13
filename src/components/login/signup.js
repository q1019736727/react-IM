
import React,{Component} from 'react'
import './index.scss'
import saferender from '../../decorator/saferender'
import Dialog from '../common/dialog/dialog'
import {showTip} from '../common/showTip/tiptool'
import {Link} from 'react-router-dom'
import WebIM from '../../webIM/init'

// @saferender 相当于已经执行了这个函数(不用加())
// @saferender() 相当于执行renturn的函数
@saferender({
    errorHandler: (error) => {
       //错误处理
    }
})
class signup extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:'chiuyung'
        }

        this.signup = this.signup.bind(this)
    }

    signup = () => {
        let options = {
            username: this.refs.username.value,
            password: this.refs.password.value,
            nickname: this.refs.nickname.value,
            success: ()=>{
                alert('注册成功')
            },
            error: ()=>{
                alert('注册失败')
            },
            appKey: 'seventcq#react-im',
            apiUrl: 'http://a1.easemob.com'
        }
        console.log(options)
        WebIM.conn.open(options)

    }
    render(){
        /*Link主要是虚拟dom中应用*/
        return(
            <div className='BG'>
                <section className='sign-wrapper'>
                    <h3>注册</h3>
                    <input ref='username' type="text" name='username' placeholder='用户名'/>
                    <input ref='password' type="password" name='password' placeholder='密码'/>
                    <input ref='nickname' type="text" name='nickname' placeholder='昵称'/>
                    <button onClick={this.signup}>注册</button>
                    <p>已有账号，
                        <Link to="/signin">登录 </Link>
                    </p>
                </section>
            </div>
        )
    }
}
export default  signup