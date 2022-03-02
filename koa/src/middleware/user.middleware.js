const bcryptjs = require("bcryptjs");

const {getUerInfo} = require("../service/user.service");

const { 
  userFormateError, 
  userAlreadyExited,
  userRegisterError,
  userDoesNotExist,
  invalidPassword,
  userLoginError,
  encryptionError,
  samePasswordError,
} = require('../constant/err.type');


const  userValidator  = async (ctx ,next) => {
    const { user_name, password } = ctx.request.body;//postman要使用Body json 
    // console.log("----------",user_name,password);
    //合法性
    if(!user_name || !password){
        console.error("用户密码或用户名为空",ctx.request.body);
        ctx.app.emit('error', userFormateError, ctx);//可以在 app.on('error', (erro,ctx) => {});中接收到emit的参数
        return
    }

    await next()
}

 // 合理性
 const verifyUser = async (ctx, next) => {
    const { user_name } = ctx.request.body
  
    // if (await getUerInfo({ user_name })) {
    //   ctx.app.emit('error', userAlreadyExited, ctx)
    //   return
    // }

    try {
      const res = await getUerInfo({ user_name })//getUerInfo({ user_name })返回的是Promise对象,永远为真. awit Promise会返回 Promise的结果
      if (res) {
        console.error('用户名已经存在', { user_name })
        ctx.app.emit('error', userAlreadyExited, ctx)
        return
      }
    } catch (error) {
      console.error('获取用户信息错误', err)
      ctx.app.emit('error', userRegisterError, ctx)
      return;
    }
  
    await next()
  }

  const crpytPassword = async (ctx,next) => {
    const {password} =  ctx.request.body;

    if(!password){
      console.error("修改密码不能为空");
      ctx.app.emit('error',encryptionError, ctx);
      return
    }
    const slat = bcryptjs.genSaltSync(10);
    // hash保存的是 密文
    const hash = bcryptjs.hashSync(password,slat);
    ctx.request.body.password = hash;
   
    await next();
  }

  const verifyLogin = async (ctx, next) => {
   
    const { user_name, password } = ctx.request.body;
    try {
      const res = await  getUerInfo({user_name});
    // 1. 判断用户是否存在(不存在:报错)
      if (!res) {
        console.error('用户名不存在', { user_name })
        ctx.app.emit('error', userDoesNotExist, ctx)
        return
      }

      // 2. 密码是否匹配(不匹配: 报错)
      // console.log(password,res.password);
      if (!bcryptjs.compareSync(password, res.password)) {//有顺序要求 未加密，加密  鼠标放在compareSync看注释
        ctx.app.emit('error', invalidPassword, ctx)
        return
      }

      ctx.loginUser = res;
      
    } catch (error) {
      console.error(err)
      return ctx.app.emit('error', userLoginError, ctx)
    }

    await next();
  }

  //比较新旧密码
  const verifyPasswordIfSame = async (ctx,next) => {
    //获取id及新密码
    const id = ctx.state.user.id;
    const newPassword = ctx.request.body.password;


    console.log("------------",newPassword);

    //用id获取原password
    const res = await getUerInfo({id});

    if(bcryptjs.compareSync(newPassword,res.password)){ 
      ctx.app.emit('error',samePasswordError, ctx)
      return
    }

    await next();
  }

module.exports = {
    userValidator,
    verifyUser,
    crpytPassword,
    verifyLogin,
    verifyPasswordIfSame,
}