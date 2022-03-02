const Router = require("koa-router");


const {
    auth,
    hadAdminPermission,
} = require("../middleware/auth.middleware");
const {validator} = require("../middleware/goods.middleware")
const {
    upload,
    create,
    update,
    remove,
    softRemove,
    restore,
    findAll,
} = require("../controller/goods.controller");


const router = new Router({prefix:"/goods"});

//商品图片上传
router.post("/upload",auth,hadAdminPermission,upload);

//发布商品
router.post("/",auth,hadAdminPermission,validator,create);

//修改商品
router.put("/:id",auth,hadAdminPermission,validator,update);

//硬删除商品，直接在数据库中去掉
router.delete("/:id",auth,hadAdminPermission,remove);

//软删除商品，在数据库中的delectedAt修改，下架
router.patch("/:id/off",auth,hadAdminPermission,softRemove);

//上架
router.patch("/:id/on",auth,hadAdminPermission,restore);

//获取商品列表
router.get("/",findAll);


module.exports = router;