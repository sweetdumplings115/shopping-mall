const jwt = require("jsonwebtoken");

const {
    tokenExpiredError, 
    invalidToken,
    hasNotAdminPermission,
} = require("../constant/err.type");

const {JWT_SECRET} = require("../config/config.default");

//验证token即是否登录
const auth = async (ctx,next) => {
    const {authorization = "" } = ctx.request.header;
    const token = authorization.replace('Bearer ', '');
    // console.log("Token: ",token);

    try {
        // user中包含了payload的信息(id, user_name, is_admin)
        const user = jwt.verify(token, JWT_SECRET);
        ctx.state.user = user;
      } catch (err) {
        switch (err.name) {
          case 'TokenExpiredError':
            console.error('token已过期', err)
            return ctx.app.emit('error', tokenExpiredError, ctx)
          case 'JsonWebTokenError':
            console.error('无效的token', err)
            return ctx.app.emit('error', invalidToken, ctx)
        }
    }

   await  next();
}


const hadAdminPermission = async(ctx,next) => {
  const {is_admin} = ctx.state.user;
  // console.log(is_admin);

  if(!is_admin){
    console.error("该用户没有管理员权限");
    ctx.app.emit("error",hasNotAdminPermission,ctx);
    return;
  }

  await next();
}
module.exports = {
    auth,
    hadAdminPermission,
};