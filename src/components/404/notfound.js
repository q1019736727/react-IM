
import React,{Component} from 'react'
import saferender from '../../decorator/saferender'

@saferender((error)=>{

})
class notfound extends Component {
    render(){
        return(
            <div>404未找到该页面</div>
        )
    }

}
export default notfound