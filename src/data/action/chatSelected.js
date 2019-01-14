import {CHAT_STATE} from "./actionType";

export function chatChange(options){
    return  (dispatch) => {
        dispatch({
            type:CHAT_STATE,
            payload:{
                state:options
            }
        })
    }
}