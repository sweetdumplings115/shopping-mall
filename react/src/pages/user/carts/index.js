import React,{memo, useCallback, useEffect, useRef, useState}from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

// import { throttle } from "lodash";
import GOHomm from "../../../components/go-home";

import CartsCover from "../../../components/carts-cover";


import {
    getCartsAction,
    getAddrsAction
} from  "../store/index";

import {CartsWrapper} from "./style";

function Carts() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [addrsShow,setAddrsShow] = useState(false);//地址是否显示
    const boxRef = useRef();//全选与全选
    const [isAllSelect,setAllSelect] = useState(0);//0 未点击 1 全选 -1 全不选
    const [showAddr,setShowAddr] = useState();//修改选择的地址

    const [sum,setSum] = useState(0);//总价


    
    
  

    const {carts,addrs} = useSelector((state) => ({
        carts:state.getIn(["user","carts"]),
        addrs:state.getIn(["user","addrs"])
    }),shallowEqual);

    useEffect(() => {
        dispatch(getCartsAction(1,10));
        dispatch(getAddrsAction());
    },[dispatch]);


    
    useEffect(() => {
            const token = localStorage.getItem("token");
            if(!token){
                navigate("/user/login")
            }
    },[]);
    // const outsideAlerterThrottle  =  useCallback(throttle(useOutsideAlerter,5000,{
    //     leading: true,
    //     trailing: false,
    //   }),[]) ;

    // outsideAlerterThrottle(ref,setAddrsShow);


    // useOutsideAlerter(ref,setAddrsShow);

    // console.log(array);




    // const   sumprice = async () => {
    //    sum = await new  Promise((resolve) => 
    //    setTimeout(() => {//总价  等待使用的价格放入array中
    //         if(array.length !== 0){
    //             for(let i of array){
    //                 sum = sum + i;
    //             }
    //         }
    //         resolve(sum);
    //     },1000))
      

    //     return  sum.toFixed(2);
    // }

    // function sumP(){
    //     setTimeout(() => {//总价  等待使用的价格放入array中
    //         if(array.length !== 0){
    //             for(let i of array){
    //                 sum = sum + i;
    //             }
    //         }
    //         console.log(sum);
    //     },50);
        
    // }
  

   

    

    return (
        <CartsWrapper addrsShow={addrsShow}>
            <GOHomm/>
            <div className="header">
                <p className="h-sum">全部商品{carts?.result?.total}</p>
                <p className="addr" onClick={() => setAddrsShow(!addrsShow)} >配送至 { showAddr ? showAddr?.address: addrs?.result && addrs?.result[0].address}</p>
                {/* <div ref={ref} > */}
                    <div className="addrs" >
                        <ul>
                                {
                                    addrs?.result?.map(item => {
                                        return <li key={item?.id} onClick={() => changeAddr(item)}>{item?.consignee}
                                                 <div className="li-addr">{item?.address}</div>
                                               </li>
                                    })
                                }
                        </ul>
                        <div className="redundant"></div>
                    </div>
            </div>
            <div className="body">
                <div className="thead">
                        <div className="column t-checkbox">
                            <div className="column cart-checkbox">
                                <input type="checkbox"  ref={boxRef} onClick={() => allSelectClick()}/>
                            </div>
                            <div className="column word">全选</div>
                        </div>
                        <div className="column t-goods">商品</div>
                        <div className="column t-price">单价</div>
                        <div className="column t-quantity">数量</div>
                        <div className="column t-sum">小计</div>
                        <div className="column t-action">操作</div>
                </div>
                <ul>
                    {
                        carts?.result?.list?.map((item,index) => {
                            return <CartsCover key={item.id} info={item} select={isAllSelect} setSum={setSum}/>
                            // return <li >{item.goods_info.goods_name}</li>
                        })
                    }
                </ul>
                <div className="operation">
                    <div className="sum-price">总价￥{sum}</div>
                    <div className="submit">结算</div>
                </div>
            </div>
            
        </CartsWrapper>
    )

   

   

    

    function allSelectClick(){
        if(boxRef?.current?.checked){//全选
            setAllSelect(1);
        }else {
            setAllSelect(-1);
        }
        
    }

    function changeAddr(addr){
        setShowAddr(addr);
    }


    function useOutsideAlerter(ref,setToggle) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event) {
                console.log(ref.current);
                console.log(event.target);
                if (ref.current && !ref.current.contains(event.target)) {
                    setToggle(false);
                }else{
                    setToggle(true);
                }
            }
    
            // Bind the event listener
            document.addEventListener("mouseover", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mouseover", handleClickOutside);
            };
        }, [ref]);

    }

    

}

export default memo(Carts);