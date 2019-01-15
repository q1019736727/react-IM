
import {FRIEND_LIST} from "../action/actionType";

export default function sessionReucer(state = {
    rosters: []
},action) {
    console.log('数据',action.payload)
    switch (action.type) {
        case FRIEND_LIST:
            return Object.assign({},state,{
                rosters: [...action.payload.data]
            })
        default:
            return state
    }

}