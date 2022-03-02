import React,{ memo,useEffect,useState ,useRef } from "react";
import { useNavigate } from "react-router-dom";
import {register} from "../../../service/user"
import {RegWrapper} from "./style";
import {judgeLegalUserName,judgeLegalPSw} from "../../../utils/data-format";



function Register(){

    const [account,setAccount] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPaw,setConfirmPaw] =  useState("");
    const [emptyErrorDisplay,setEmptyErrorDisplay] = useState("none");
    const [reg,setReg] = useState();
    const navigate = useNavigate();
    const ref = useRef();

    useEffect(() => {
        if(reg !== undefined){
            register(account,password).then(res => {
                navigate("/user/login");
            }).catch(erro => {
                if(erro.message){
                     ref.current.innerText = "该用户已存在";
                }
            })
        }
    },[reg])



    return(
        <RegWrapper isShow={emptyErrorDisplay}>
                <div className="info">
                    <input type="text" placeholder="请输入账号" className="account" value={account} onChange={(event) => {setAccount(event.target.value)}}/>
                    <input type="password" placeholder="请输入密码" className="password" value={password} onChange={(event) => {setPassword(event.target.value)}}/>
                    <input type="password" placeholder="请再次输入密码" className="password" value={confirmPaw} onChange={(event) => {setConfirmPaw(event.target.value)}}/>
                    <div className="empty">
                        <p  className="emptyWord" ref={ref}>账号和密码不能为空</p>
                    </div>
                    <span>
                        <button className="btn" onClick={clickBtn}>注 册</button>
                    </span>
               </div>
        </RegWrapper>
    )

    function clickBtn(){

        if(!account || !password){
            ref.current.innerText ="账号和密码不能为空";
            setEmptyErrorDisplay("");
         }else if(password !== confirmPaw){
            ref.current.innerText ="两次输入密码不同";
            setEmptyErrorDisplay("");
        }else if(!judgeLegalUserName(account)){
            // console.log(judgeLegalUserName(account));
            ref.current.innerText ="账号仅支持中文、英文、数字、“-”、“_”的组合，6-16个字符";
            setEmptyErrorDisplay("");
         }else if(!judgeLegalPSw(password)){
            ref.current.innerText ="密码仅支持大小写字母和数字的组合，8-15个字符";
            setEmptyErrorDisplay("");
         }else{
            setReg(!reg);
        }
    }
}

export default memo(Register);