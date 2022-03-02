const path = require("path");

const {
    fileUploadError,
    unSupportedFiletype,
    publishGoodsError,
    invalidGoodsID,
    invalidRemoveGoodsID,
    invalidSoftRemoveGoodsID,
    invalidRestoreGoodsID,
    queryConditionsError,
} = require("../constant/err.type");

const {
    createGoods,
    updateGoods,
    removeGoods,
    softRemoveGoods,
    restoreGoods,
    findGoods,

} = require("../service/goods.service")

class GoodsController {
    async upload(ctx,next){
        const {file} = ctx.request.files;
        if(file){
            var imgUrl = "";
            const fileTypes = ["image/png","image/jpeg"];

            if(!fileTypes.includes(file.type) && file.type){
                return   ctx.app.emit("error",unSupportedFiletype,ctx);
            }
           
           if(file[1]){
            for(let f of file){
                if(!fileTypes.includes(f.type)){
                  return   ctx.app.emit("error",unSupportedFiletype,ctx);
                }
                imgUrl = imgUrl  + path.basename(f.path) + " ";
            }
           }else{
               imgUrl = path.basename(file.path);
           }


            
    

            ctx.body = {
                code:0,
                message:"商品上传成功",
                result: {
                    goods_img:imgUrl
                }
            }
        }else{
          return  ctx.app.emit("error",fileUploadError,ctx);
        }
    }

    async create(ctx,next){
        //调用service的createGoods
        try {
            const {createdAt,updatedAt,...res}  =  await createGoods(ctx.request.body);
            ctx.body = {
                code:0,
                message:"发布商品成功",
                result:res
            }
        } catch (error) {
            console.error(error);
            return ctx.app.emit("error",publishGoodsError,ctx);
        }
    }

    async update(ctx,next){
        try {
           const res = await updateGoods(ctx.params.id,ctx.request.body);
           if(res){
               ctx.body = {
                   code:0,
                   message:"修改商品成功",
                   result:""
               }
           }else {
               return ctx.app.emit("error",invalidGoodsID,ctx);
           }
        } catch (error) {
            console.error(error);
        }
       
    }

    async remove(ctx){
        const id = ctx.params.id;
        try {
            const res =  await removeGoods(id);
            if(res){
                ctx.body = {
                    code:0,
                    message:"删除商品成功",
                    result:""
                }
            }else{
                return ctx.app.emit("error",invalidRemoveGoodsID,ctx);
            }
        } catch (error) {
            console.error(error);
        }
    }

    async softRemove(ctx){
        const id = ctx.params.id;
        try {
            const res =  await softRemoveGoods(id);
            if(res){
                ctx.body = {
                    code:0,
                    message:"下架商品成功",
                    result:""
                }
            }else{
                return  ctx.app.emit("error",invalidSoftRemoveGoodsID,ctx);
            }
        } catch (error) {
            console.error(error);
        }
       
    }

    async restore(ctx){
        const id = ctx.params.id;
        try {
          const res =  await restoreGoods(id);
          if(res){
            ctx.body = {
                code:0,
                message:"上架商品成功",
                result:""
            }
          }else{
            return  ctx.app.emit("error",invalidRestoreGoodsID,ctx);
          }
        } catch (error) {
            console.error(error);
        }
         

    }

    async findAll(ctx){
        //解析pageNum,pageSize
        const {pageNum = 1,pageSize = 10} = ctx.request.query;

        try {
          const res =  await findGoods(pageNum,pageSize);
          
          ctx.body = {
                code:0,
                message:"获取商品列表成功",
                result:res
         }
        } catch (error) {
            console.error(error);
            return  ctx.app.emit("error",queryConditionsError,ctx);
        }
    }

   

}

module.exports = new GoodsController();