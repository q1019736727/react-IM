
import {FRIEND_LIST,SET_CURRENT} from "../action/actionType";

export default function sessionReucer(state = {
    rosters: [],
    currentFriend:null
},action) {
    switch (action.type) {
        case FRIEND_LIST:
            return Object.assign({},state,{
                rosters: [...action.payload.data]
            })
        case SET_CURRENT:
            return Object.assign({},state,{
                currentFriend:{...action.payload.current}
            })
        default:
            return state
    }

}