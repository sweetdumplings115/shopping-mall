import React,{memo,useEffect,useRef,useState}from "react";

import { useSelector,shallowEqual,useDispatch} from "react-redux";

import {ShopHeaderWrapper} from "./style";
import { NavLink } from "react-router-dom";

import {changeLoginOutAction} from "../../../user/store/index";


function ShopHeader() {
    const [isShow,setIsShow] = useState();
    const [isSpread,setIsSpread] = useState(false);
    const [isLoginOut,setLoginOut] = useState(false);
    const ref =  useRef();
    const dispatch = useDispatch();

    useOutsideAlerter(ref,setIsSpread);

    const {loginMessage} = useSelector(state => ({
        loginMessage:state.getIn(["user","loginMessage"]),
    }),shallowEqual);


    useEffect(() => {
        if(loginMessage?.code === 0){
          setIsShow("none");
        }else{
            setIsShow("");
        }
    },[loginMessage]);
    useEffect(() => {
        if(isLoginOut) dispatch(changeLoginOutAction(undefined));
    },[isLoginOut])

    return (
        <ShopHeaderWrapper isShow={isShow} isSpread={isSpread}>
            <div className="center" ref={ref}>
              <h2>个人中心</h2>
              <div className="popupWindow">
                  <NavLink to="/user/carts" >
                      我的购物车
                  </NavLink>
                  <NavLink to="/user/upload">
                      上传商品
                  </NavLink>
                  <NavLink to="/user/account">
                      账号管理
                  </NavLink>
                  <p onClick={loginOutClick}>退出</p>
              </div>
            </div>
            <div className="user">
                <NavLink to="/user/login" className="login">
                     登录&nbsp;
                 </NavLink>
                 <NavLink to="/user/reg " className="reg">
                 &nbsp;注册
                </NavLink>
            </div>
        </ShopHeaderWrapper>
    )

    function loginOutClick(){
        setLoginOut(true);
    }


    function useOutsideAlerter(ref,setToggle) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setToggle(false);
                }else{
                    setToggle(true);
                }
            }
    
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }
}

export default memo(ShopHeader);