import  request from "./request.js";

//添加地址
export function addAddress(addr){
    const {consignee,phone,address} = addr;
    return (
        request({
            method:"post",
            url:"/address",
            data:{
                consignee,
                phone,
                address
            }
        })
    )
}
//查询
export function findAllAddress(){
    return (
        request({
            method:"get",
            url:"/address",
        })
    )
}

//修改
export function updateAddress(id,addr){
    const {consignee,phone,address} = addr;
    return (
        request({
            method:"put",
            url:"/address/"+id,
            data:{
                consignee,
                phone,
                address
            }
        })
    )
}
//删除
export function removeAddress(id){
    return (
        request({
            method:"delete",
            url:"/address/"+id,
        })
    )
}
//设置默认
export function setDefault(id){
    return (
        request({
            method:"patch",
            url:"/address/"+id,
        })
    )
}
