
import WebIM from '@src/webIM/init'
import eventEmitter from '@src/untils/event'
export function mesInit() {
    return (dispatch)=>{
        WebIM.conn.listen({

            onRoster: function ( message ) {
            },
            //处理好友申请等消息
            onPresence: (message) => {
                eventEmitter.emit('presenceApply',message)
            }
        })
    }
}