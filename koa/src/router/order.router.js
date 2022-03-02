const Router = require("koa-router");

const {auth} = require("../middleware/auth.middleware");
const {validator} = require("../middleware/order.middleware")

const {
    create,
    findAll,
    update,
} = require("../controller/order.controller");

const router = new Router({prefix:"/orders"});


//提交订单
router.post("/",auth,validator({
    address_id:"int",
    goods_info:"string",
    total:"number"
}),create);

//获取订单列表
router.get("/",auth,findAll);
//修改订单状态
router.patch("/:id",auth,validator({
    status:{type:"int", required: true,max:4,min:0}
}),update);

module.exports = router;