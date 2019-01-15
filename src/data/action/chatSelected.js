import {CHAT_STATE} from "./actionType";

export function chatChange(options){
    return  (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch({
                type:CHAT_STATE,
                payload:{
                    state:options
                }
            })
            resolve(options)
        })

    }
}