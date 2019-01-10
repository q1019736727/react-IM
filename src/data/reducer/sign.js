
import {REG_STATE} from '../action/stateType'

export default function signReducer(state = {
    regState:0
},action ) {
    switch (action) {
        case 'REG_STATE':
            return Object.assign({},state,{
                regState: action.payload.state
            })
        default:
            return state
    }
}