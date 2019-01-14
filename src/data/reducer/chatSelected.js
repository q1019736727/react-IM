import {CHAT_STATE} from '../action/actionType'

export default function chatReducer( state = {
    selectItem:1 //1是单聊 2是群聊
},action) {
    switch (action.type) {
        case CHAT_STATE:
            return Object.assign(state,{
                selctItem: action.payload.state
            })
        default:
            return state
    }
}
