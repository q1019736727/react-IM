
import {createStore, combineReducers, applyMiddleware} from 'redux';
import '../webIM/init'
import sign from './reducer/sign'
import session from './reducer/session'
import chatselect from './reducer/chatSelected'
import message from './reducer/message'
import thunk from 'redux-thunk';


const _reducers = {
    sign: sign,
    session:session,
    chatselect: chatselect,
    message:message
}

const reducers = combineReducers(_reducers);

/*使用异步必须配置thunk 例如Promise*/
let middlewares = [thunk]

let finalCreateStore = applyMiddleware(...middlewares)(createStore);

const store = finalCreateStore(reducers);

export default  store




// const reducer = (state, action)=>{
//     if(state === undefined){
//         return {n: 10}
//     }else{
//         if(action.type === 'add'){
//             var newState = {n: state.n + action.payload}
//             return newState
//         }else{
//             return state
//         }
//     }
// }
//export default  const store = createStore(reducer) //一个store写法