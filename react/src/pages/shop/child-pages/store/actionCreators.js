import {
    CHANGE_Goods,
} from "./constans";

import {
    getGoods,
} from "../../../../service/goods";

const changeGoodsAction = (res) => ({
    type:CHANGE_Goods,
    goodsList:res
})


export const getGoodsAction = (pageNum,pageSize) => dispatch => {
           getGoods(pageNum,pageSize).then(res => {
                // console.log("DISPATCH++++++++++++++++++",res?.result);
                 dispatch(changeGoodsAction(res?.result));
            }).catch(err =>{
                // console.log("DISPATCH________________",err);
                dispatch(changeGoodsAction(err))
            })
}


