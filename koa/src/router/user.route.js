const Router = require("koa-router");


const {
    userValidator,
    verifyUser,
    crpytPassword, 
    verifyLogin,
    verifyPasswordIfSame,
} = require("../middleware/user.middleware");
const {auth} =  require("../middleware/auth.middleware");
const {
    register,
    login,
    changePassword,
}  = require("../controller/user.controller");

const router = new Router({prefix:"/users"});



//注册
router.post("/register",userValidator,verifyUser,crpytPassword, register);
//登录
router.post("/login",userValidator,verifyLogin,login);

//修改密码接口
// router.patch('/change', auth,verifyPasswordIfSame,crpytPassword, changePassword);
router.post('/change', auth,verifyPasswordIfSame,crpytPassword, changePassword);


// 在编程中一个 “幂等” 操作的特点是其任意多次执行所产生的影响均与一次执行的影响相同
// 在HTTP中，PUT被定义为idempotent(幂等的)方法，POST则不是，这是一个很重要的区别
// PATCH方法是新引入的，是对PUT方法的补充，用来对已知资源进行“局部更新”

router.get("/get",(ctx,next) => {
    ctx.body = "jkkk";
})

module.exports = router;