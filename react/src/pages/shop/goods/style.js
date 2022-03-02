import styled from "styled-components";

export const GoodsWrapper = styled.div`
    .img {
        position: relative;
        left: 150px;
        top: 30px;
        width: 350px;
        height: 350px;
        display: inline-block;
        img {
            width: 320px;
           height: 320px;
        }
    }
    .info {
        position:relative;
        display: inline-block;
        left: 200px;
        width: 600px;
        bottom: 20px;
        .name {
            display: block;
            height: 52px;
            width: 500px;
            font: 700 16px Arial,"microsoft yahei";
        }
        .price {
            position:relative;
            font-size:15px;
            color:red;
        }
        .addrs{
            display:block;
            height: 24px;

        }
        .carts {
            display:inline-block;
            .addbtn {
                /* display: block; */
                top: 15px;
                background: #f1f1f1;
            }
            .word {
                /* display: block; */
                display: inline-block;
                position: relative;
                top: 15px;
                width: 15px;
                text-align: center;
            }
            .subtractbtn {
                /* display: block; */
                top: 15px;
                background: #f1f1f1;
            }
            .useless {
                color:${props => props.isShow ? "#CBCB" :"" };
            }
            .addCarts {
                /* display: block; */
                background-color:red;
                background-color: #df3033;
                font-size: 15px;
                font-weight: 500;
                top: 70px;
                /* left: 9px; */
                right: 60px;
                width: 180px;
                height: 40px;
            }




            

            button {
               position:relative;
                display:inline-block;

            }
        }

    }
`