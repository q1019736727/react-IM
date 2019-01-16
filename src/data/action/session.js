import WebIM from '@src/webIM/init'
import {FRIEND_LIST,SET_CURRENT} from "./actionType";

export function getRosters() {
    return (dispatch)=>{
        return new Promise((resolve, reject) => {
            WebIM.conn.getRoster({
                success:(rosters)=>{
                    rosters = rosters.filter((roster)=>{
                        return roster.subscription === 'both'
                    })
                    dispatch({
                        type:FRIEND_LIST,
                        payload:{
                            data:rosters
                        }
                    })
                    resolve(rosters)
                },
                error: (e) => {
                    reject(e);
                }
            })
        })
    }
}

export function setCurrentFriend(options) {
    return (dispatch)=>{
        dispatch({
            type: SET_CURRENT,
            payload: {
                current:options
            }
        })
    }
}