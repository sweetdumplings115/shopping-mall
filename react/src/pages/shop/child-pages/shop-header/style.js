import styled from "styled-components";

export const ShopHeaderWrapper = styled.div`
    background-color:#FFFFFF;
    height: 50px;
    .center {
        display:${ props => props.isShow ? "inline" :"none" };
        position: relative;
        float: right;
        top: 15px;
        right: 50px;
        cursor: pointer;
        h2 {
            width: 80px;
        }
        .popupWindow {
            display:${ props => props.isSpread ?  "inline-block" :  "none" };
            border-radius: 5px;
            background-color: #fff;
            height: 120px;
            width: 80px;
            position: relative;
            top: 10px;
            box-shadow: -1px -5px 24px -7px rgba(0,0,0,0.3);
            -webkit-box-shadow: -1px -5px 24px -7px rgba(0,0,0,0.3);
            -moz-box-shadow: -1px -5px 24px -7px rgba(0,0,0,0.3);
            a {
                text-decoration:none;
                display: block;
                margin-top: 10px;
                font-size: 14px;
                margin-left: 5px;
            }
            p{
                margin-top: 10px;
                font-size: 14px;
                margin-left: 5px;
                cursor: pointer;
            }
        }
    }
    .user{
            float: right;
            position: relative;
            right: 170px;
            top: 15px;
            .login {
                display:${ props => props.isShow || "inline" };
                text-decoration : none;
                color: #333;
                border-right: 1px solid #333;
                font-size: 15px;
            }
            .reg {
                display:${ props => props.isShow || "inline" };
                text-decoration : none;
                color: #333;
                font-size: 15px;
            }  
        }
`