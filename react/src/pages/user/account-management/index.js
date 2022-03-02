import React,{memo, useState}from "react";

import { NavLink } from "react-router-dom";

import GoHome from "../../../components/go-home/index";
import ChangePassword from "./change-password/index";
 import ChangeAddress from "./change-address/index";


import {AccountManagementWrapper} from "./style";

function AccountManagement() {
    const [isShowPassword,setShow] = useState(false);
    return (
        <AccountManagementWrapper>
            <GoHome />
            <div className="header">
                <h2>账号管理</h2>
            </div>
            <div>
                <div className="menu">
                    <div onClick={() => setShow(false)}>
                        收货地址
                    </div>
                    <div onClick={() => setShow(true)}>
                        修改密码
                    </div>
                </div>
                <div className="content">
                            {isShowPassword ? <ChangePassword/> : <ChangeAddress/>}
                </div>
            </div>
        </AccountManagementWrapper>
        
    )
}

export default memo(AccountManagement);