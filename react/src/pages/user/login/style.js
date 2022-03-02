import styled from "styled-components";

import bcgUrl from "../../../assets/img/bcg.jpg";

export const LoginWrapper = styled.div`
  text-align: center;
  background:url(${bcgUrl});
  /* height: 1137px; */
  height: 713px;
  background-size: cover;
  width: 100%;

  .info {
    position: relative;
    top: 120px;
    float: right;
    right: 90px;
    background-color: hsla(0,0%,100%,.92);//hsla() 函数使用色相、饱和度、亮度、透明度来定义颜色。
    /* opacity: 1.5; *///透明度
    width: 460px;
    height: 432px;
    border-radius: 10px;

    .reg {
        a {
            font-size:15px;
        }
    }

        .word {
            float: right;
            margin-top: 15px;
            position: relative;
            right: 152px;
            font-size: 15px;
            top: 35px;
            font-size: 20px;
            color: #757C80;
        }

        .empty {
            display:${ props => props.isShow || "block" };
            position: relative;
            left: 61px;
            bottom: 32px;
            background-color: rgba(0,0,0,0.3);
            color: rgb(255,255,255);
            width: 340px;
            height: 40px;
            border-radius: 4px;
            .emptyWord {
                position:relative;
                display:${ props => props.isShow || "block" };
                top: 10px;
                font-size: 15px;
            }
        }
        .account {
            width: 310px;
            display: block;
            margin: auto;
            margin-bottom: 40px;
            background-color: #fff;
            border-radius: 4px;
            border: 1px solid #dcdfe6;
            font-size: 15px;
            height: 40px;
            outline-color: #95a0f0;
            padding: 0 15px;
            margin-top: 125px;
        }

        .password {
            width:310px;
            display: block;
            margin: auto;
            margin-bottom: 10px;
            background-color: #fff;
            border-radius: 4px;
            border: 1px solid #dcdfe6;
            font-size: 15px;
            height: 40px;
            outline-color: #95a0f0;
            padding: 0 15px;
            margin-bottom: 75px;
        }

        span {
            a {
            margin-right: 200px;
            margin-left: 0px;
            text-decoration:none;
           }   

           .btn {
            text-align: center;
            display: inline-block;
            line-height: 1;
            cursor: pointer;
            margin: 0;
            font-weight: 500;
            padding: 12px 20px;
            font-size: 14px;
            border-radius: 4px;
            color: #fff;
            background-color: #6777ef;
            border-color: #6777ef;
            border: 0;
            box-shadow: 2px 2px  2px 2px #fceeee;
         }

            .btn:hover {
                background: #374be9;
                border-color: #374be9;
                color: #fff;
            }

            .btn:active {
                background: #374be9;
                border-color: #374be9;
                color: #fff;
            }
        }
  }
 
`
