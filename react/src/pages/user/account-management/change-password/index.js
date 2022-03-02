import React,{memo, useState,useRef,useEffect}from "react";
import {useNavigate} from "react-router-dom";

import {ChangePasswordWrapper} from "./style";
import {changePaw,login} from "../../../../service/user";

function ChangePassword() {
    


    const [isShow,setIsShow] = useState(false);
    const [newPsw,setNewPSW] = useState("");//要有""初始值不然会报错，第一次setPSW(event.target.value )}是    undefined
    const ref = useRef();
    const navigate = useNavigate();

    useEffect(() => {
            const token = localStorage.getItem("token");
            if(!token){
                navigate("/user/login")
            }
    },[]);



    return (
        <ChangePasswordWrapper isShow={isShow}>
            <input type="password" className="input" value={newPsw} onChange={(event) => setNewPSW(event.target.value)} placeholder="请输入修改密码"/>
            <button className="btn" onClick={btnClick}>提交</button>
            <div className="empty">
                        <p  className="emptyWord" ref={ref}>密码修改成功</p>
            </div>
            
        </ChangePasswordWrapper>
    )



    function btnClick(){
        if(newPsw){
            setIsShow(true);
            changePaw(newPsw).then(res => {
                // setIsShow(false);
                if(res?.code === 0){
                    ref.current.innerText = "密码修改成功";
                    setTimeout(() => {
                        setIsShow(false);
                    },2000);
                }
            }).catch(err => {
                ref.current.innerText = "密码未修改";
                console.error(err);
            })
        }else{
            setIsShow(true);
            ref.current.innerText = "密码不能为空";
        }
        
    }
}

export default memo(ChangePassword);