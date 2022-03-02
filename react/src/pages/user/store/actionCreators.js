import {
    CHANGE_Login,
    CHANGE_Login_Out,
    CHANGE_Carts,
    CHANGE_Addr,
} from "./constans";

import {
    login,
} from "../../../service/user";
import {
    getCarts,
} from "../../../service/carts";
import {
    findAllAddress,
} from "../../../service/address";
const changeLoginAction = (res) => ({
    type:CHANGE_Login,
    loginMessage:res
})


export const getLoginAction = (user_name,password) => dispatch => {
            login(user_name,password).then(res => {
                // console.log("DISPATCH++++++++++++++++++",res);
                 dispatch(changeLoginAction(res))
            }).catch(err =>{
                // console.log("DISPATCH________________",err);
                dispatch(changeLoginAction(err))
            })
}

//等价于
// export const getLoginAction = (user_name,password) => {
//    return   dispatch => {
//         login(user_name,password).then(res => {
//             dispatch(changeLoginAction(res.result))
//         })
//    }
// } 

export const changeLoginOutAction = (res) => ({
    type:CHANGE_Login_Out,
    loginMessage:res
})

const changeCartsAction = (res) => ({
    type:CHANGE_Carts,
    carts:res
})

export const getCartsAction = (pageNum,pageSize) => dispatch => {
   getCarts(pageNum,pageSize).then(res => {
    //    console.log(res);
      dispatch(changeCartsAction(res));
   }).catch(err => {
     dispatch(changeCartsAction(err));
       console.error(err);
   })
}

const changeAddrsAction = (res) => ({
    type:CHANGE_Addr,
    addrs:res
})


export const getAddrsAction = () => dispatch => {
    findAllAddress().then(res => {
     //    console.log(res);
       dispatch(changeAddrsAction(res));
    }).catch(err => {
       dispatch(changeAddrsAction(err));
        console.error(err);
    })
 }
 
