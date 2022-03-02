const {
    createOrder,
    findAllOrder,
    updateOrder,
} = require("../service/order.service");
const {orderUpdateStatusError} = require("../constant/err.type")
class OrderController{
    async create(ctx){
        const user_id = ctx.state.user.id;
        const {address_id,goods_info,total} =  ctx.request.body;
        const order_number = "ZD" + Date.now();


        const res = await createOrder({user_id,address_id,goods_info,total,order_number});

        ctx.body = {
            code:0,
            message:"生成订单成功",
            result:res
        }

    }

    async findAll(ctx){
        const {pageNum = 1,pageSize = 10,status = 0} = ctx.request.query;
        const user_id  = ctx.state.user.id;

        const res =  await findAllOrder(user_id,pageNum,pageSize,status);

        ctx.body = {
            code:0,
            message:"查找订单成功",
            result:res
        }

    }

    async update(ctx){
        const {status} = ctx.request.body;
        const {id} = ctx.request.params;
        const user_id = ctx.state.user.id;

        const res = await  updateOrder(user_id,id,status);
        if(res[0] !== 1){
            return ctx.app.emit("error",orderUpdateStatusError,ctx);
        }
        ctx.body = {
            code:0,
            message:"修改订单状态成功",
            result:res
        }
    }
}
module.exports = new OrderController();