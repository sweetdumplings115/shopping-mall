import { memo, useState,useEffect} from "react";
// import { useSelector,shallowEqual} from "react-redux";
// import { NavLink } from "react-router-dom";
import {ShopWrapper} from "./style";

import ShopHeader from "../shop/child-pages/shop-header/index";
import ShopBody from "./child-pages/shop-body";


function Shop(){
    // const [isShow,setIsShow] = useState();

    // const {loginMessage} = useSelector(state => ({
    //     loginMessage:state.getIn(["user","loginMessage"])
    // }),shallowEqual);

    // useEffect(() => {
    //     if(loginMessage.code === 0){
    //       setIsShow("none");
    //     }
    // },[loginMessage]);



    return(
        // isShow={isShow}
        <ShopWrapper >
            <ShopHeader/>
            <ShopBody/>
                 {/* <NavLink to="/user/login" className="login">
                     <button></button>
                 </NavLink>
                 <NavLink to="/user/reg " className="reg">
                     <button></button>
                 </NavLink> */}
        </ShopWrapper>
    )
}

export default memo(Shop);