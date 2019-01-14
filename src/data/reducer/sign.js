
import {REG_STATE} from '../action/actionType'

export default function signReducer(state = {
    regState: 1 //1未注册 2注册成功 3注册失败
},action ) {
    switch (action.type) {
        case REG_STATE:
            return Object.assign(state,{
                regState: action.payload.state
            })
        default:
            return state
    }
}
