const {
    goodsFormatError,
    invalidGoodsID,
} = require("../constant/err.type");
const {findGood} = require("../service/goods.service");
const validator = async(ctx,next) => {
    try {
        ctx.verifyParams({
            goods_name: { type: 'string', required: true },
            goods_price: { type: 'number', required: true },
            goods_num: { type: 'int', required: true },
            goods_img: { type: 'string', required: true },
          })
    } catch (error) {
        console.error(error);
        goodsFormatError.result = error;
        ctx.app.emit("error", goodsFormatError, ctx);
        return;
    }

    await next();
}


const findOneGood = async(ctx,next) => {
    const {goods_id} = ctx.request.body; 
    
    const res = await findGood(goods_id);
    
    if(!res){
        return ctx.app.emit("error",invalidGoodsID,ctx);
    }

    await next();
}

module.exports = {
    validator,
    findOneGood,
}