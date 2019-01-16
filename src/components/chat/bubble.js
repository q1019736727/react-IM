import React,{Component} from 'react'
import saferender from '../../decorator/saferender'
import './css/bubble.scss'
@saferender(
    (error)=>{

    }
)
class Bubblue extends Component{
    render() {
        return (
            <div className={'Bubblue-wrapper'}>
                <header>
                    姓名
                </header>
                <main>
                    <Bubblueitem></Bubblueitem>
                    <Bubblueitem></Bubblueitem>
                    <Bubblueitem></Bubblueitem>
                    <Bubblueitem></Bubblueitem>
                    <Bubblueitem></Bubblueitem>
                    <Bubblueitem></Bubblueitem>
                    <Bubblueitem></Bubblueitem>
                    <Bubblueitem></Bubblueitem>
                    <Bubblueitem></Bubblueitem>
                    <Bubblueitem></Bubblueitem>
                    <Bubblueitem></Bubblueitem>
                    <Bubblueitem></Bubblueitem>
                    <Bubblueitem></Bubblueitem>
                    <Bubblueitem></Bubblueitem>
                    <Bubblueitem></Bubblueitem>
                    <Bubblueitem></Bubblueitem>
                    <Bubblueitem></Bubblueitem>
                    <Bubblueitem></Bubblueitem>
                    <Bubblueitem></Bubblueitem>
                    <Bubblueitem></Bubblueitem>
                    <Bubblueitem></Bubblueitem>
                    <Bubblueitem></Bubblueitem>
                    <Bubblueitem></Bubblueitem>
                    <Bubblueitem></Bubblueitem>
                    <Bubblueitem></Bubblueitem>
                    <Bubblueitem></Bubblueitem>
                    <Bubblueitem></Bubblueitem>
                    <Bubblueitem></Bubblueitem>
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