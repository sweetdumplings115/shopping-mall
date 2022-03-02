const path = require("path");

const Koa = require("koa");
const KoaBody = require("koa-body");
//一般只会把POSt,PUT,PATCH请求的body挂载到ctx.request.body
const KoaStatic = require("koa-static");

const parameter = require("koa-parameter");

const cors = require("koa-cors2")//解决跨域资源共享


const errHandler = require('./errHandler')//统一的错误处理

// const userRouter = require("../router/user.route");
// const goodsRouter = require("../router/goods.router");


const router = require("../router/index");


const app = new Koa();

app.use(cors(
    {
    origin: function(ctx) { //设置允许来自指定域名请求
        return 'http://localhost:3000'; //只允许http://localhost:3000这个域名的请求
    },
    maxAge: 5, //指定本次预检请求的有效期，单位为秒。
    credentials: true, //是否允许发送Cookie
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
    allowMethods: ['PATCH','GET','POST', 'PUT', 'DELETE'], //设置所允许的HTTP请求方法
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
}
));



// app.use(async(ctx,next) => {
//    ctx.header("Access-Control-Allow-Origin", "*");
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
//     res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By", ' 3.2.1')
//     res.header("Content-Type", "application/json;charset=utf-8");
//     await  next();
// });


// console.log(process.cwd());
//KoaBody可以上传文件
app.use(KoaBody({
    multipart:true,//打开文件上传
    formidable:{
         // 在配制选项option里, 不推荐使用相对路径
        // 在option里的相对路径, 不是相对的当前文件. 相对process.cwd()
        uploadDir:path.join(__dirname,"../upload"),
        keepExtensions:true,//保留扩展名
       
    },
    parsedMethods:["POST","PUT","PATCH","DELETE"]////一般只会把POSt,PUT,PATCH请求的body挂载到ctx.request.body,
}));

app.use(KoaStatic(path.join(__dirname,"../upload")));//处理静态资源
app.use(parameter(app));//参数格式校验

// app.use(userRouter.routes())
//    .use(goodsRouter.routes());//.routes()记着加括号  app.use要的是中间件即函数,直接写userRouter报错
//多次导入再.routes()过于麻烦
app.use(router.routes())
.use(router.allowedMethods());//对不支持的请求方式返回501

app.on('error', errHandler);

module.exports = app;