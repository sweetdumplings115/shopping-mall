import  request from "./request.js";

//获取购物车
export function getCarts(pageNum,pageSize){
    return(
        request({
            method:"get",
            url:"/carts",
            params:{
                pageNum,
                pageSize
            }
        })
    )
}
//更新购物车
export function updataCarts(goods_id,goods){
    const {selected,number} = goods;
    return(
        request({
            method:"patch",
            url:"/carts/"+goods_id,
            data:{
                selected,
                number
            }
        })
    )
}


//添加购物车
export function addCarts(goods_id){
    return(
        request({
            method:"post",
            url:"/carts",
            data:{
                goods_id
            }
        })
    )
}
//删除购物车
export function removeCarts(ids){
    return(request({
        method:"delete",
        url:"/carts",
        data:{
            ids
        }
    }))
}
//全选购物车
export function selectAll(){
    return(
        request({
            method:"post",
            url:"selectAll"
        })
    )
}
//全不选
export function unselectAll(){
    return(
        request({
            method:"post",
            url:"unselectAll"
        })
    )
}