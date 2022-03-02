import styled from "styled-components";

export const ChangeAddressWrapper = styled.div`
        .item {
            height: 50px;
            width: 500px;
            margin-top: 12px;
        }
        .x {
            float: right;
            font-size: 15px;
            cursor: pointer;
        }
        .consignee {
            display: inline-block;
            width: 24px;
            margin-right: 50px;
        }
        .phone {
            display: inline-block;
        }
        .address {
            display: inline-block;
            position: relative;
            left: 150px;
        }
        .submit {
            input {
                border: 1px solid #F5F5F5;
                display: block;
                margin-top: 20px;
                height: 31px;
                width: 322px;
            }
            button{
                background-color: #F5F5F5;
                margin-top: 10px;
                height: 29px;
                width: 50px;
                border: 1px solid #DDDDDD;
            }
        }


        .empty {
            display:${ props => props.isShow ?  "block" : "none" };
            position: relative;
            left: 61px;
            bottom: 31px;
            background-color: rgba(0,0,0,0.3);
            color: rgb(255,255,255);
            width: 220px;
            height: 30px;
            line-height: 30px;
            border-radius: 4px;
            .emptyWord {
                position:relative;
                display:${ props => props.isShow ?  "block" : "none"};
                font-size: 13px;
            }
        }


`