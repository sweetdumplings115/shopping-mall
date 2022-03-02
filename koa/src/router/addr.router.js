const Router = require("koa-router");

const {validator} = require("../middleware/addr.middleware");
const {auth} = require("../middleware/auth.middleware");
const {
    create,
    findAll,
    update,
    remove,
    setDefault,
} = require("../controller/addr.controller");

const router = new Router({prefix:"/address"});

//添加地址
router.post("/",auth,validator({
    consignee:"string",
    phone:{type:"string",format:/^1[3|4|5|7|8][0-9]{9}$/},
    address:"string"
}),create);
//获取地址
router.get("/",auth,findAll);

//修改地址
router.put("/:id",auth,validator({
    consignee:"string",
    phone:{type:"string",format:/^1[3|4|5|7|8][0-9]{9}$/},
    address:"string"
}),update);

//删除地址
router.delete("/:id",auth,remove);

//设置默认
router.patch("/:id",auth,setDefault);

module.exports = router;