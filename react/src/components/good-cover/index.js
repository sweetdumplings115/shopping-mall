import React,{memo}from "react";

import {GoodsCoverWrapper } from "./style";
import {getSizeImg} from "../../utils/data-format";
import {URL} from "../../common/contants";
import { NavLink } from "react-router-dom";

function GoodsCover(props) {
    const {info} = props;
    // console.log(info);
    return (
        <GoodsCoverWrapper >
            <NavLink to={"/shop/goods/"+info.id}>
                <div className="cover">
                <div className="img">
                    <img src={getSizeImg(URL+info?.goods_img)} alt="略" />
                </div>
                <p className="name">{info?.goods_name}</p>
                <p className="price">￥{info?.goods_price}</p>
                </div>
            </NavLink>
        </GoodsCoverWrapper>
    )
}

export default memo(GoodsCover);