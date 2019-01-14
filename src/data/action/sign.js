
import WebIM from '@src/webIM/init'
import {REG_STATE} from './actionType'

export function regist(options) {
    /*默认会传入一个 dispatch */
    return  (dispatch) => {
        return new Promise((resolve, reject) => {
            let success = options.success
            let error = options.error
            options.success = function () {
                dispatch({type: REG_STATE,payload:{state:2}})
                resolve()
            }
            options.error = function (e) {
                dispatch({type: REG_STATE,payload:{state:3}})
                reject(e)
            }
            dispatch({type: REG_STATE,payload:{state:1}})
            WebIM.conn.registerUser(options)
        })
    }
}

export function loginAction(options) {
    return  (dispatch) => {
        return new Promise((resolve, reject) => {
            let success = options.success
            let error = options.error
            options.success = function (data) {
                resolve(data)
            }
            options.error = function (e) {
                reject(e)
            }
            WebIM.conn.open(options)
        })
    }
}