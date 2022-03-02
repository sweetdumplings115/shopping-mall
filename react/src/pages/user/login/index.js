import { LoginWrapper } from "./style";
import React, { memo,useEffect,useRef,useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";



import {getLoginAction} from "../store/index"
import { NavLink,useNavigate} from "react-router-dom";

function Login(){

    const [account,setAccount] = useState("");
    const [password,setPassword] = useState("");
    const [login,setLogin] = useState();
    const [emptyErrorDisplay,setEmptyErrorDisplay] = useState("none");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const ref = useRef();

    useEffect(() => {
        if(login !== undefined) {
            dispatch(getLoginAction(account,password));
        } 
    },[dispatch,login]);

    const {loginMessage} = useSelector(state => ({
        loginMessage:state.getIn(["user","loginMessage"])
    }),shallowEqual);

    useEffect(() => {
        if( loginMessage && loginMessage.code !== undefined && loginMessage.code !==0){
            ref.current.innerText = "账号与密码不匹配";
            setEmptyErrorDisplay("");
        }
        if(loginMessage && loginMessage.code === 0){
          localStorage.setItem("token", loginMessage.result?.token)
          navigate("/shop");
        }
    },[loginMessage,navigate]);

    return(
            <LoginWrapper isShow={emptyErrorDisplay}>
                {/* styled-components传参数要在Wrapper里 */}
                <div className="info">
                    <span className="word">欢迎━(*｀∀´*)ノ登录</span>
                    <input type="text" placeholder="请输入账号" className="account" value={account} onChange={(event) => {setAccount(event.target.value)}} />
                    <input type="password" placeholder="请输入密码" className="password"  value={password} onChange={(event) => {setPassword(event.target.value)}}/>
                    <div className="empty">
                        <p  className="emptyWord" ref={ref}>账号和密码不能为空</p>
                    </div>
                    <span className="reg">
                        <NavLink to="/user/reg">注册</NavLink>
                    </span>
                    <span>
                        <button className="btn" onClick={clickBtn}>登 录</button>
                        {/* onClick={() => setLogin(!login)}      大括号力要用函数但不能调用，不然会报错 ,setLogin(!login)不行 即() => setLogin(!login)或者 clickBtn  */}
                    </span>
                </div>
                <div className="background">

                </div>
            </LoginWrapper>
    )

    function clickBtn(){
        if(!account || !password){
            ref.current.innerText = "账号和密码不能为空";
           setEmptyErrorDisplay("");
        }else{
            setEmptyErrorDisplay("none");
            setLogin(!login);
        }
    }


}

export  default memo(Login);