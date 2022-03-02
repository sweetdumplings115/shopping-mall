import styled from "styled-components";

export const CartsCoverWrapper = styled.div`
                display: block;
                width: 990px;
                height: 122px;
                /* background-color: red; */
                margin-bottom: 10px;
                left: 281px;
                position: relative;
                border: 1px solid #c5c5c5;
                .info {
                    margin-left: 10px;
                    margin-top: 10px;
                    width: 170px;
                    height: 110px;
                    .cart-checkbox {
                        bottom: 12px;
                    }
                    .word {
                        left: 50px;
                        bottom: 10px;
                    }
                    img {
                        top: 8px;
                        left: 12px;
                        width:90px;
                        height:90px;
                    }

                }
                .price {
                    text-align: center;
                    width: 140px;
                    margin-left: 383px;
                    height: 75px;
                }
                .num {
                    margin-left: 22px;
                    .btn {
                        display:inline-block;
                        background: #f1f1f1;
                        width: 17px;
                        height: 20px;
                    }
                    .useless {
                        color:${props => props.isShow ? "" : "#CBCB"};
                    }
                    p {
                        display: inline-block;
                        height: 16px;
                        width: 21px;
                        /* bottom: 0px; */
                        text-align: center;
                        border: 1px solid #cbcbcb;
                        padding-top: 2px;
                    }
                }
                .sun {
                    margin-left: 35px;
                    width: 70px;
                    text-align: center;
                }
                .action {
                    margin-left: 54px;
                    cursor: pointer;
                }
                .column {
                position:relative;
                display:inline-block;
                }
    
`