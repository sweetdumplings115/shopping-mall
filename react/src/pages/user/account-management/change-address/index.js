import React,{memo,useEffect, useState,useRef}from "react";

import {ChangeAddressWrapper} from "./style";

import {getAddrsAction} from "../../store/index";
import {
    removeAddress,
    addAddress,
} from "../../../../service/address"

import {useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { shallowEqual } from "react-redux";

function ChangeAddress() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [change,setChange] = useState(0);
    const [consignee,setConsignee] = useState("");
    const [phone,setPhone] = useState("");
    const [address,setAddress] = useState("");
    const [isShow,setShow] = useState(false);
    const ref = useRef();

    

    const {addrs} = useSelector((state) => ({
        addrs:state.getIn(["user","addrs"])
    }),shallowEqual);

    function islogin(){
        const token = localStorage.getItem("token");
        if(!token){
            navigate("/user/login")
        }
    }

    useEffect(() => {
        // console.log(change);
         if(addrs?.code !== 0 || change !== 0) dispatch(getAddrsAction());
    },[dispatch,change])

    return (
        <ChangeAddressWrapper isShow={isShow}>
            <h2>收货地址</h2>
            <ul>
                {
                    addrs && addrs?.result?.map((item) => {
                        return (
                            <div className="item" key={item?.id}>
                                <div className="consignee">{item?.consignee}</div>
                                <div className="phone">{item?.phone}</div>
                                <div className="address">{item?.address}</div>
                                <div className="x" onClick={() => removeClick(item?.id)}>x</div>
                            </div>
                        )
                    })
                }
            </ul>
            <div className="submit">
                <input type="text"  placeholder="请输入收货人" value={consignee} onChange={(e) => setConsignee(e.target.value)}/>
                <input type="text" placeholder="请输入电话" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                <input type="text" placeholder="请输入地址" value={address} onChange={(e) => setAddress(e.target.value)}/>
                <button onClick={submitClick}>提交</button>
            </div>
            <div className="empty">
                        <p className="emptyWord" ref={ref}>不能为空</p>
            </div>
        </ChangeAddressWrapper>
    )

    function submitClick(){
        setShow(true);
        if(consignee && phone && address){
            addAddress({consignee,phone,address}).then(res => {
                ref.current.innerText = "地址添加成功";
                setChange(c => c + 1);
                setTimeout(() => {
                    setShow(false);
                },2000);

            }).catch(err => {
                console.error(err);
                if(err?.result?.errors[0].field === "phone"){
                    ref.current.innerText = "电话格式错误"
                }
            })
        }else{
            setShow(true);
        }
        
    }

    function removeClick(id){
        islogin();
        if(id)
        {
            removeAddress(id).then(res => {
                        setChange(c => c + 1);
            }).catch(err => {
                        console.error(err);
            })
        }
    }
}

export default memo(ChangeAddress);