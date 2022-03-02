import React,{memo}from "react";
import { NavLink } from "react-router-dom";
import{GoHomeWrapper} from "./style";

function GOHomme() {
    return (
        <GoHomeWrapper>
            <NavLink to="/shop">
                返回首页
            </NavLink>
        </GoHomeWrapper>
    )
}

export default memo(GOHomme);