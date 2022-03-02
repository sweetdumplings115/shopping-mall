import React,{memo,useEffect,useState}from "react";
import { useSelector,shallowEqual,useDispatch } from "react-redux";
import {ShopBodyWrapper} from "./style";

import GoodsCover from "../../../../components/good-cover/index";
import {pageSize} from "../../../../common/contants";

import {getGoodsAction} from "../store/index";


function ShopBody() {
    const [isShow,setIsShow] = useState();
    const [currentPage,setCurrentPage] = useState(1);//当前页数
    const [jumpPage,setJumPage] = useState(2);//跳转页数 
    let lastPage = 1;//最大页数

   //pageSize单页商品个数
    const dispatch = useDispatch();

    const {loginMessage,goodsList} = useSelector(state => ({
        loginMessage:state.getIn(["user","loginMessage"]),
        goodsList:state.getIn(["goods","goodsList"])
    }),shallowEqual);

    useEffect(() => {
        if( loginMessage && loginMessage?.code === 0){
          setIsShow("none");
        }
    },[loginMessage]);

    useEffect(() => {
        dispatch(getGoodsAction(currentPage,pageSize))
    },[currentPage,pageSize,dispatch])

    useEffect(() => {
        if(!loginMessage || loginMessage?.code !== 0){
            localStorage.removeItem("token"); 
        }
    },[loginMessage])

    lastPage = Math.ceil(goodsList?.total/pageSize);//页数  Math.ceil 上取整


    // console.log(Math.floor(goodsList.total/5));


    
    return (
        <ShopBodyWrapper isShow={isShow} currentPage={currentPage} lastPage={lastPage}>
            <div className="slideshow">
                {/* <h2>轮播图</h2> */}
                <img src="https://imgcps.jd.com/ling4/12147583/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5f3a47329785549f6bc7a6f1/7173ca39/cr/s/q.jpg" alt="" />
            </div>
            {/* <div className="user">
                <NavLink to="/user/login" className="login">
                     登录&nbsp;
                 </NavLink>
                 <NavLink to="/user/reg " className="reg">
                 &nbsp;注册
                </NavLink>
            </div> */}
            
            <div className="goodsList">
                {
                    goodsList?.list?.map((item) => {
                        return <GoodsCover key={item.id}  info={item} />
                    })
                }
            </div>
            <div className="pages">
                <button className="previous" onClick={reduceClick}>上一页</button>
                <button  className="num">
                    1 2 3 4 5 6
                </button>
                <button className="next" onClick={addClick}>下一页</button>
                <div className="colum form">
                    <div className="colum total">总共&nbsp;{isNaN(lastPage) ? "":lastPage}&nbsp;页，到第</div>
                    <input className="colum text" type="text" value={jumpPage} onChange={(event) => setJumPage(event.target.value)}/>
                    <div className="colum">页</div>
                    <button className="colum submit" onClick={jumpClick}>确定</button>
                </div>
            </div>
        </ShopBodyWrapper>
    )

    function jumpClick(){
        if(jumpPage <= lastPage){
             setCurrentPage(jumpPage);
        }
    }

    function addClick(){
        if(currentPage !== lastPage){
            setCurrentPage(c => c +1);
        }
    }

    function reduceClick(){
        if(currentPage !== 1){
             setCurrentPage(c => c - 1);
        }
    }
}

export default memo(ShopBody);