import {
    CHANGE_Goods,
}from "./constans.js";

import {Map} from "immutable";//优化{...state,banner:action.banner}及浅拷贝过于浪费空间的问题



const initState = Map({
    goodsList:{}
});

function reducer(state = initState,action){
    switch(action.type){
        case CHANGE_Goods:
            return state.set("goodsList",action.goodsList)
        default:
            return state
    }
}

export default reducer;