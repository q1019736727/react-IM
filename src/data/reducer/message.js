import {MSG_LIST} from "../action/actionType";

export default function msgListReducer(state={
    msglist:{}
},action) {
    switch (action.type) {
        case MSG_LIST:
            return Object.assign({},state,{
                msglist: addMSG(action.payload.msg,action.payload.id,action.payload.from,action.payload.to,state.msglist)
            })
        default:
            return state
    }
}
/*
* msg 信息
* to 和谁的信息(to就是对应人的名字)
* msglist 和所有人的信息
* */
function addMSG(msg,id,from,to,msglist) {
    let list = msglist[to] || []
    list.push({
        msg:msg,
        id:id,
        from:from
    })
    msglist[to] = list
    return Object.assign({},msglist)
}