import React,{Component} from 'react'
import saferender from '../../decorator/saferender'
import './css/bubble.scss'
import {connect} from 'react-redux'

@connect(
    state => ({
        currentFriend:state.session.currentFriend
    }),
    {

    }
)
@saferender(
    (error)=>{

    }
)
class Bubblue extends Component{
    shouldComponentUpdate(){
        return true
    }
    render() {
        return (
            <div className={'Bubblue-wrapper'}>
                <header>
                    {this.props.currentFriend.name}
                </header>
                <main>

                    <Bubblueitem></Bubblueitem>

                </main>
                <footer>
                    <div className={'textarea'}>
                        <textarea name="" id="" cols="30" rows="10">

                        </textarea>
                    </div>
                    <button>发送</button>
                </footer>
            </div>
        );
    }
}
export default Bubblue

class Bubblueitem extends Component{
    render() {
        return (
            <div>
                聊天内容
            </div>
        );
    }

}