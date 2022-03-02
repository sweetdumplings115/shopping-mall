const {
    createOrUpdate,
    findCarts,
    updateCarts,
    removeCarts,
    selectAllCarts,
} = require("../service/cart.service");

const {
    cartFormatError,
    removeCartsError,
} = require("../constant/err.type");

class CartController {
    async add(ctx){
        //添加到购物车
        //解析goos_id,user_id

        const user_id = ctx.state.user.id;
        const {goods_id} = ctx.request.body; 

        const res = await createOrUpdate(user_id,goods_id);

        ctx.body = {
            code:0,
            message:"添加到购物车成功",
            result:res
        }
    }

    async findAll(ctx){
        const {pageNum = 1, pageSize = 10} = ctx.request.query;
        const user_id = ctx.state.user.id;

          const res = await findCarts(pageNum,pageSize,user_id);

          ctx.body = {
            code:0,
            message:"获取购物车列表成功",
            result:res
        }
    }

    async update(ctx){
        const id = ctx.request.params.id;
        const {number,selected} =  ctx.request.body;

        if(!number && !selected){
            cartFormatError.message = "number和selected不能同时为空";
            return ctx.app.emit("error",cartFormatError,ctx);
        }


        const res = await updateCarts({id,number,selected});
        if(!res){
            return ctx.app.emit("error",cartFormatError,ctx);
        }

        ctx.body = {
            code:0,
            message:"更新购物车成功",
            result:res
        }

    }

    async remove(ctx){
        const {ids} = ctx.request.body;
        const user_id = ctx.state.user.id;
        try {
            const res = await removeCarts(ids,user_id);
            if(res == ids.length){
                ctx.body = {
                    code:0,
                    message:"删除购物车成功",
                    result:res
                }
            }else{
                removeCartsError.result = {deleteCount:res};
                return ctx.app.emit("error",removeCartsError,ctx);
            }
        } catch (error) {
            console.error(error);   
        }
        
    }
    async selectAll(ctx){
        const user_id = ctx.state.user.id;
        const res = await selectAllCarts(user_id,true);
        
        ctx.body = {
            code:0,
            message:"全选成功",
            result:res
        }

    }
    async unselectAll(ctx){
        const user_id = ctx.state.user.id;
        const res = await selectAllCarts(user_id,false);
        
        ctx.body = {
            code:0,
            message:"全不选成功",
            result:res
        }
    }


}

module.exports = new CartController();