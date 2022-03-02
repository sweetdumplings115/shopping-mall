import styled from "styled-components";

export const AccountManagementWrapper = styled.div`
    .header {
        background-color: #E2231A;
        height: 60px;
        color: #FFFFFF;
        h2 {
            position: relative;
            top: 15px;
            margin-left: 241px;
           }
    }
    .menu {
        height: 50px;
        width: 110px;
        display: inline-block;
        position: relative;
        left: 250px;
        top: 54px;
        cursor: pointer;
        div:nth-child(1){
        }
        div:nth-child(2){
            position: relative;
            top: 35px;
        }
        div:hover {
            color:#ff4401;
        }
    }
    .content {
        height: 500px;
        width: 500px;
        float: right;
        position: relative;
        right: 37%;
        margin-top: 50px;

    }



`