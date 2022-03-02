import request  from "./request";
//获取商品列表
export function getGoods(pageNum,pageSize){
    return(
        request({
            method:"get",
            url:"/goods",
            params:{
                pageSize,
                pageNum
            }
        })
    )
}

//发布商品
export function uploadGoods(goods){
    const {goods_name,goods_price,goods_img,goods_num} = goods;
    return (
        request({
            method:"post",
            url:"/goods",
            data:{
                goods_name,
                goods_price,
                goods_img,
                goods_num
            }
        })
    )
}
//修改商品
export function modify(goods,id){
    const {goods_name,goods_price,goods_img,goods_num} = goods;
    return(
        request({
            method:"put",
            url:'/goods/'+id,
            data:{
                goods_name,
                goods_price,
                goods_img,
                goods_num
            }
        })
    )
}



//下架商品
export function  softRemove(id){
    return (
        request({
            method:"patch",
            url:"/goods/"+id+"/off",
        })
    )
}


//上架商品
export function restore(id){
    return(
        request({
            method:"patch",
            url:"/goods/"+id+"/on"
        })
    )
}
//上传货物图片
export function uploadGoodsPicture(data){
    return(
        request({
            method:"post",
            url:"/goods/upload",
            headers:{'Content-Type':'multipart/form-data'},//传文件
            data:data
        })
    )
}
