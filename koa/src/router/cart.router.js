const Router = require("koa-router");


const  {auth} = require("../middleware/auth.middleware");
const {validator} = require("../middleware/cart.middleware");
const {findOneGood} = require("../middleware/goods.middleware");

const {
    add,
    findAll,
    update,
    remove,
    selectAll,
    unselectAll,
} = require("../controller/cart.controller");


const router = new Router({prefix:"/carts"});

//加入购物车
router.post("/",auth,validator({goods_id:"number"}),findOneGood,add);
//获取当前用户购物车列表
router.get("/",auth,findAll);
//更新购物车
router.patch("/:id",auth,validator({
    number:{type:"number",required:false},
    selected:{type:"bool",required:false},
}),update);

//删除购物车
router.delete("/",auth,validator({ids:"array"}),remove);

//全选与全不选
router.post("/selectAll",auth,selectAll);
router.post("/unselectAll",auth,unselectAll);


module.exports = router;