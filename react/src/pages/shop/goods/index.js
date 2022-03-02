import React,{memo, useEffect, useState}from "react";
import { useDispatch,shallowEqual, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import {getGoodsAction} from "../child-pages/store/index";
import GoHome from "../../../components/go-home/index";

import {addCarts} from "../../../service/carts";
import {GoodsWrapper} from "./style";




function Goods() {
    // console.log("%cnjjk","background-color:red;font-size:15px");//打印有样式的log
    

    const[num,setNum] = useState(1);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isShow,setIsShow] = useState(true);//减按钮是否显示为暗色
    //const location = useLocation(); react-router的
    const urlParams = new URL(window.location.href);

    let id = urlParams?.hash.replace("#/shop/goods/","");

    let pageNum = 1;
    let pageSize = 10;


    const {goodsList} = useSelector((state) => ({
        goodsList:state.getIn(["goods","goodsList"])
    }),shallowEqual);
  
    useEffect(() => {
        if(!goodsList?.total){
            dispatch(getGoodsAction(pageNum,pageSize));
        }
    },[dispatch,goodsList.total,goodsList])

   function findGoodsByID(id,goodsList){
       for(let i = 0 ;i < goodsList.total;i++){
           if(goodsList.list[i]?.id  === id * 1){
               return goodsList.list[i];
           }
       }
   }

   const goods = findGoodsByID(id,goodsList);


    return (
        <GoodsWrapper isShow={isShow}>
            <GoHome/>
            {/* <div className="header">头部</div> */}
            <div className="img">
                {
                    goods?.goods_img &&  <img src={"http://localhost:8080/"+goods?.goods_img} alt="" />
                }
            </div>
            <div className="info">
                <p className="name">{goods?.goods_name}</p>
                <p className="price">￥{goods?.goods_price}</p>
                {/* <p className="addrs">地址</p> */}
                <div className="carts">
                    <button className="addbtn" onClick={() => btnClick(1)}>+</button>
                    <p className="word">{num}</p>
                    <button className="subtractbtn useless" onClick={() => btnClick(-1)}>-</button>
                    <button className="addCarts" onClick={addCartsClick}>加入购物车</button>
                </div>
            </div>
        </GoodsWrapper>
    )
    function btnClick(changeNum){
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

    function addCartsClick(){
        if(!localStorage.getItem("token")){
            navigate("/user/login");
        }else{
            addCarts(id * 1).then(res => {
            //   console.log(res);
               navigate("/user/carts");
            }).catch(err => {
                console.error(err);
            });
        }
        
    }
}

export default memo(Goods);