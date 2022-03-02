import  request from "./request.js";

//提交订单
export function addOrder(order){
    const {address_id,goods_info,total} = order;
    return (
        request({
            method:"post",
            url:"/orders",
            data:{
                address_id,
                goods_info,
                total
            }
        })
    )
}
//查询订单
export function findOrder(){
    return (
        request({
            method:"get",
            url:"/orders",
        })
    )
}
//修改订单状态
export function updateOrder(id){
    return (
        request({
            method:"patch",
            url:"/orders/"+id,
        })
    )
}