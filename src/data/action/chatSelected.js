
export default function chatChange(options){
    alert(options)
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            alert(11)
            resolve()
        })
    }
}