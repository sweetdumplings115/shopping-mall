const {
  createUser,
  getUerInfo,
  updateById,
} = require("../service/user.service");

const {JWT_SECRET,TOKEN_EXPIRATION_TIME} = require("../config/config.default");


const {updatePasswordError} = require("../constant/err.type");

const jwt = require("jsonwebtoken");

class UserController{
    async register(ctx,next){
       //获取数据
       const { user_name, password } = ctx.request.body;//postman要使用Body json 
       //验证数据


       {
      // //合法性
      //  if(!user_name || !password){
      //    ctx.body ={
      //     code: '10001',
      //     message: '用户名或密码为空',
      //     result: '',
      //    }
      //    return;
      //  }

      // // 合理性
      // if (getUerInfo({ user_name })) {
      //   ctx.status = 409
      //   ctx.body = {
      //     code: '10002',
      //     message: '用户已经存在',
      //     result: '',
      //   }
      //   return
      // }
    }

       // 2. 操作数据库
       const res = await createUser(user_name, password);//返回一行记录
       // console.log(res)


       // 3. 返回结果
      ctx.body = {
          code:0,
          mmessage:"用户注册成功",
          result:{
            id:res.id,
            user_name:res.user_name
          }
        }
    }

    async login(ctx) {
      const {user_name} = ctx.request.body;
      // 1. 获取用户信息(在token的payload中, 记录id, user_name, is_admin)
      try {
        // const {password, ...res} = await getUerInfo({user_name});
        const {password, ...res} = ctx.loginUser;
        ctx.loginUser = "";

        ctx.body = {
          code: 0,
          message:"用户登录成功",
          result:{
            token: jwt.sign(res, JWT_SECRET, { expiresIn: TOKEN_EXPIRATION_TIME }),
          }
        }
      } catch (error) {
        console.error('用户登录失败', err)
      }
    }

    async changePassword(ctx,next){
      //1,获取数据 id与新password;
      const id = ctx.state.user.id;
      const password = ctx.request.body.password;
      // console.log("-------------",id,password);
      //更新数据库
      if(await updateById({id,password})){
        ctx.body = {
          code:0,
          message:"修改成功",
          result:""
        }
      }else{
        ctx.body = updatePasswordError;
      }
      
      //返回结果
    }
   
}

module.exports = new UserController;