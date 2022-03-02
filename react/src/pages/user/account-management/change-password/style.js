import styled from "styled-components";

export const ChangePasswordWrapper = styled.div`
        .empty {
                display:${props => props.isShow  ? "block" : "none" };
                top: 15px;
                position: relative;
                background-color: rgba(0,0,0,0.3);
                color: rgb(255,255,255);
                width: 222px;
                height: 40px;
                border-radius: 4px;
                text-align: center;
            .emptyWord {
                position:relative;
                display:${props => props.isShow ? "block" :  "none"};
                top: 10px;
                font-size: 15px;
            }
        }

        input {
                border: 1px solid #cac5c5;
                height: 30px;
                width: 250px;
                display: block;
                font-size:15px;
        }
        .btn {
                background-color: #F5F5F5;
                margin-top: 10px;
                height: 29px;
                width: 50px;
                border: 1px solid #DDDDDD;
        }
    



`