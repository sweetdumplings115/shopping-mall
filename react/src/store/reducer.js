// import {combineReducers} from "redux";
 import {combineReducers} from "redux-immutable";//优化了内存浪费问题



import {reducer as userReducer} from "../pages/user/store/index";
import { reducer as goodsReducer } from "../pages/shop/child-pages/store";


const reducers = combineReducers({
    user:userReducer,
    goods:goodsReducer
});

export default reducers;