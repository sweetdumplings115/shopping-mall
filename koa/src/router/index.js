const fs = require("fs");

const Router = require("koa-router");

const route = new Router();

fs.readdirSync(__dirname).forEach(file => {
    if(file!="index.js"){
        let r = require("./"+file);
        //–require是运行时调用，所以require理论上可以运用在代码的任何地方
        //–import是编译时调用，所以必须放在文件开头
        route.use(r.routes());//代替 app.use(userRouter.routes())
    }
})

module.exports = route;