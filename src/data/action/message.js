
import WebIM from '@src/webIM/init'
import eventEmitter from '@src/untils/event'
import {getRosters} from "./session";

export function mesInit() {
    return (dispatch)=>{
        WebIM.conn.listen({
            //连接成功回调
            onOpened: function ( message ) {
                /* getRosters 里面也是一个 dispatch函数所以用 dispatch 执行才会执行 return里面的*/
                dispatch(getRosters())
            } ,
            //收到文本消息
            onTextMessage: function ( message ) {
                console.log('收到消息',message)
            },
            //好友列表
            onRoster: function ( roster ) {
                console.log('好友列表',roster)
                dispatch(getRosters())
            },
            //处理好友申请等消息
            onPresence: (message) => {
                eventEmitter.emit('presenceApply',message)
            }
        })
    }
}


