import WebIM from '@src/webIM/init'

export function getRosters() {
    return (dispatch)=>{
        return new Promise((resolve, reject) => {
            WebIM.conn.getRoster({
                success:(rosters)=>{
                    console.log('好友列表',rosters)
                    resolve(rosters)
                },
                error: (e) => {
                    reject(e);
                }
            })
        })
    }
}