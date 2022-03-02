import styled from "styled-components";

export const ShopBodyWrapper = styled.div`
    .user{
        float: right;
        position: relative;
        right: 170px;
        top: 7px;
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
    .slideshow {
        display:inline-block;
        height: 650px;
        margin-top: 21px;
        img {
            display: block;
            height: 650px;
            width: 950px;
            position: relative;
           left: 265px;

        }
    }

    .goodsList{
        position:relative;
        left:200px;
        width: 1075px;
        background: #fff;
        margin-top: 30px;
    }
    .pages {
        margin-left:450px;
        margin-top:50px;
        .previous{
            width:70px;
            height:35px;
            border: 1px solid #F5F5F5;
            color:${props =>   props.currentPage === 1 ? "#CCCCCC" :  "#333333" };
            cursor: pointer;
        }
        .num {
            height:35px;
            width:240px;
            border: 1px solid #F5F5F5 ;
        }
        .next{
            width:70px;
            height:35px;
            border: 1px solid #F5F5F5;
            color:#CCCCCC;
            color:${props =>   props.currentPage === props.lastPage ? "#CCCCCC" :  "#333333" };
            cursor: pointer;
        }
        .form {
            .total {
                margin-left: 5px;
            }
            .text {
                width: 36px;
                height: 24px;
                border: solid 1px #ededed;
                margin-left: 5px;
                margin-right: 5px;
                text-align: center;
            }
            .submit{
                border: solid 1px #ededed;
                width: 45px;
                height: 23px;
                margin-left:5px;
                cursor: pointer;
            }
            .submit:hover {
                color: #f40;
                border-color: #f40;
            }
        }
        .colum {
            display:inline-block;
        }
    }
    
`