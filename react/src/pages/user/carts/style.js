import styled  from "styled-components";

export const CartsWrapper = styled.div`


    .header {
        height:96px;
        .h-sum {
            display: inline-block;
            position: relative;
            left: 282px;
            top: 65px;
            font-weight: 700;
            font-size: 16px;
        }


        
            .addr {
                float: right;
                position: relative;
                right: 350px;
                top: 67px;
                cursor: pointer; 
                text-align: center;
            }
            /* div {
                position:relative;
                float:right;
                height: 100px;
                width: 200px; */
                .addrs {
                    position: relative;
                    background-color: #fff;
                    width: 200px;
                    float: right;
                    top: 85px;
                    right: 200px;
                    z-index: 1; 
                    display: ${props => props.addrsShow ? "block":"none"};
                    box-shadow: -1px 0px 6px 3px rgb(126 121 121 / 75%);
                    -webkit-box-shadow: -1px 0px 6px 3px rgb(126 121 121 / 75%);
                    -moz-box-shadow: -1px 0px 6px 3px rgba(126,121,121,0.75);
                    ul {
                    
                        li {
                            margin-top:10px;
                            margin-left:10px;
                            cursor: pointer;
                            .li-addr {
                                width: 90px;
                                float: right;
                            }
                        }
                        li:hover {
                                color:#c91623;
                        }
                    }
                    .redundant {
                        height:10px;
                        }
                }

            /* } */
       
    }
    .body {
        .thead {
            background: #f3f3f3;
            display: block;
            height: 32px;
            width: 990px;
            line-height: 32px;
            margin: 0 0 10px;
            padding: 5px 0;
            /* background: #f3f3f3; */
            border: 1px solid #e9e9e9;
            border-top: 0;
            position: relative;
            left: 280px;
            .t-goods {
                left: 100px;
                top: 2px
            }
            /* .t-props {
                left:50px;
            } */
            .t-price {
                left:545px;
                top: 2px;
            }
            .t-quantity {
                left: 635px;
                top: 2px;
            }
            .t-sum {
                left: 710px;
                top: 2px;
            }
            .t-action {
                left: 780px;
                top: 2px;
                
            }
            .t-checkbox {
                
                .cart-checkbox {
                    position:relative;
                    left: 8px;
                    top: 4px;
                }
                .word {
                    margin-left: 18px;
                }
            }
            .column {
                position:relative;
                display:inline-block;
            }
        }

        .operation {
            margin-left: 280px;
            /* margin-right: 247px;
             */
            width: 990px;
            height: 50px;
            border: 1px solid #c5c5c5;
            margin-bottom: 40px;
            .sum-price {
                display: inline-block;
                position: relative;
                top: 15px;
                left: 5px
            }
            .submit {
                float: right;
                width: 90px;
                height: 50px;
                background: #e54346;
                text-align: center;
                line-height: 50px;//height于line-height一样，字居中
                cursor: pointer;

            }
        }
    }
`