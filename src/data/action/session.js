import WebIM from '@src/webIM/init'
import {FRIEND_LIST} from "./actionType";

export function getRosters() {
    return (dispatch)=>{
        return new Promise((resolve, reject) => {
            WebIM.conn.getRoster({
                success:(rosters)=>{
                    console.log('好友列表',rosters)
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