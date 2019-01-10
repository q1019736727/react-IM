
import React,{Component} from 'react'
import './index.scss'
import Dialog from '../common/dialog'

class signup extends Component{
    constructor(){
        super()

        this.signup = this.signup.bind(this)
    }

    signup = () => {
        Dialog.show()
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