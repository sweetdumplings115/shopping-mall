import React,{memo, useEffect, useRef }from "react";
import { useState } from "react";

import {CartsCoverWrapper } from "./style";
import {URL} from "../../common/contants";
import {getCartsAction} from "../../pages/user/store/index";
import {
    removeCarts,
    updataCarts,
} from "../../service/carts"
import { useDispatch } from "react-redux";
// import {getSizeImg} from "../../utils/data-format";
// import {URL} from "../../common/contants";

function CartsCover(props) {
    const {info,select,setSum} = props;
    const [num,setNum] = useState(info?.number);
    const [isShow,setIsShow] = useState(true);//减按钮是否显示为暗色
    const [isRemove,setRemove] = useState(false);//是否点击了删除
    const boxRef = useRef();


    const dispatch = useDispatch();


    // array[index * 1] = (info.goods_info.goods_price * num).toFixed(2) * 1;
    // // console.log("计算",array);
    // sum( (info.goods_info.goods_price * num).toFixed(2) * 1);

    useEffect(() => {
        if(isRemove) dispatch(getCartsAction(1,10));
    },[dispatch,isRemove])

    useEffect(() => {
        if(select === 1){//全选
            boxRef.current.checked = true;
            setSum(c => c + (info.goods_info.goods_price * num).toFixed(2) * 1);
        }else if(select === -1){//全不选
            boxRef.current.checked = false;
            setSum(0);
        }
        
    },[select]);



    return (
        <CartsCoverWrapper isShow={isShow}>
            <div className="column info">
                <div className="column cart-checkbox">
                     <input type="checkbox"  ref={boxRef} onClick={selectClick} className="checkbox"/>
                </div>
                <img className="column" src={URL + info?.goods_info?.goods_img} alt="" />
                <div className="column word">
                   {
                        info.goods_info.goods_name
                    }
                </div>
            </div>
            <div className="column price">
              ￥{
                    info.goods_info.goods_price
                }
            </div>
            <div className="column num">
                <button className="btn" onClick={()  => changeNum(1)}>
                    +
                </button>
                <p className="column">{num}</p>
                <button className="btn useless" onClick={()   => changeNum(-1)}>
                    -
                </button>
            </div>
            <div className="column sun">
               ￥ {
                  (info.goods_info.goods_price * num).toFixed(2)
                }
            </div>
            <div className="column action">
                <p onClick={removeClick}>删除</p>
            </div>
        </CartsCoverWrapper>
    )

    function changeNum(changeNum){
        if(num === 2 && changeNum === -1){
            setNum(c => c + changeNum );
            setIsShow(true);
         }else if(num  === 1  && changeNum === -1){
            // setIsShow(false);
            // setNum(c => c + changeNum );
         }else {
            setIsShow(false);
            setNum(c => c + changeNum );
         }
       
    }

    function removeClick(){
        removeCarts([info.id]).then(res => {
            setRemove(true);
            // console.log(res);
        }).catch(err => {
            console.error(err);
        });
    }

    function selectClick(){ 
        if(boxRef.current.checked){
            setSum(c => c + (info.goods_info.goods_price * num).toFixed(2) * 1);
        }
        else if(!boxRef.current.checked){
            setSum(c => c   -  (info.goods_info.goods_price * num).toFixed(2) * 1);
        }
    }
}

export default memo(CartsCover);