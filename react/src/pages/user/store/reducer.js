import {
  CHANGE_Login,
  CHANGE_Login_Out,
  CHANGE_Carts,
  CHANGE_Addr,
}from "./constans.js";

import {Map} from "immutable";//优化{...state,banner:action.banner}及浅拷贝过于浪费空间的问题



const initState = Map({
    loginMessage:{},
    carts:{},
    addrs:{}
});

function reducer(state = initState,action){
    switch(action.type){
        case CHANGE_Login:
            return state.set("loginMessage",action.loginMessage)
        case CHANGE_Login_Out:
            return state.set("loginMessage",action.loginMessage);
        case CHANGE_Carts:
            return state.set("carts",action.carts);
        case CHANGE_Addr:
            return state.set("addrs",action.addrs);
        default:
            return state
    }
}

export default reducer;