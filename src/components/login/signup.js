
import React,{Component} from 'react'
import './index.scss'
import saferender from '../../decorator/saferender'
import Dialog from '../common/dialog/dialog'
import {showTip} from '../common/showTip/tiptool'
import {Link} from 'react-router-dom'
import WebIM from '@src/webIM/init'
import { connect } from "react-redux";
import {regist} from '@src/data/action/sign'

/*通过decorator获取store里面的值*/
/*第一个是数据,第二个是操作函数*/
@connect(
    state => ({
        /*注册状态*/
        regState: state.sign.regState
    }),
    {
        regist
    }
)
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
        let username = this.refs.username.value.trim()
        let password = this.refs.password.value.trim()
        let nickname = this.refs.nickname.value.trim()
        if (!username || !password  || !nickname) {
            showTip({
                title: '请将信息填写完整',
                type: 'error'
            })
            return
        }
        let options = {
            username: username,
            password: password,
            nickname: nickname,
            appKey: 'seventcq#react-im',
            apiUrl: 'http://a1.easemob.com'
        }
        this.props.regist(options).then(()=>{
            showTip({
                title: '注册成功',
                type: 'success'
            })
            this.props.history.push('/signin')
        }).catch(e => {
            showTip({
                title: '用户已存在',
                type: 'error'
            })
        })

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
                </section>
            </div>
        )
    }
}
export default  signup;

/*通过导出connect获取store 第二种写法 */
// function mapStateToProps(state){
//    return state
// }
// function mapDispatchToProps(dispatch) {
//     return {
//         add1: ()=> dispatch({type:'add', payload: 1})
//     }
// }
// export default  connect(mapStateToProps,mapDispatchToProps)(signup);