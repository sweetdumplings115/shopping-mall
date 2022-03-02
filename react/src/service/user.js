import request  from "./request";
//登录
export function login(user_name,password){
    return (
        request({
            method: 'post',
            url:"/users/login",
            // params:{
            //     user_id,
            //     password
            // }
            data:{
                user_name,
                password
            },
            headers:{
                'Content-Type': 'application/json;charset=utf-8'
            }
            //但有时我们的数据格式并不一定是json,而后端配置的参数类型接受类型不是application/json  eg:application/x-www-form-urlencode,这时一定会报错,因为两者的类型不匹配.
            // 此时,我们需要手动设置Content-Type
        })
    )
}
//注册
export function register(user_name,password){
    return (
        request({
            method:"post",
            url:"/users/register",
            data:{
                user_name,
                password
            },
            headers:{
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
    )
}
//修改密码
export function changePaw(password){
    return (
        request({
            method:"POST",
            url:"/users/change",
            data:{
                password
            }
        })
    )

}

