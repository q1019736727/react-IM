
import WebIM from '@src/webIM/init'
import eventEmitter from '@src/untils/event'
import {getRosters} from "./session";
import {MSG_LIST} from "./actionType";

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

export function sendMessage(message,to) {
    return(dispatch)=>{
        let id = WebIM.conn.getUniqueId();             // 生成本地消息id
        var msg = new window.WebIM.message('txt', id);      // 创建文本消息
        msg.set({
            msg: message,                  // 消息内容
            to: to,                          // 接收消息对象（用户id）
            roomType: false,
            success: function (id, serverMsgId) {
                dispatch({
                    type:MSG_LIST,
                    payload:{
                        msg:message,
                        to:to,
                        id:serverMsgId
                    }
                })
            },
            fail: function(e){
                console.log("发送失败");
            }
        });
        msg.body.chatType = 'singleChat';
        WebIM.conn.send(msg.body);
    }
}


