const {
    createAddress,
    findAllAddr,
    updateAddr,
    removeAddre,
    setDefaultAddr,
} = require("../service/addr.service");
const {
    addressUpdateError,
    addressRemoveError,
    setDefaultError,
} = require("../constant/err.type");

class AddressController{
    async create(ctx){
        const user_id = ctx.state.user.id;
        const {consignee,phone,address} = ctx.request.body;

        try {
            const res = await createAddress({user_id,consignee,phone,address});
            ctx.body = {
                code:0,
                message:"添加地址成功",
                result:res
            }
        } catch (error) {
            console.error(error);
        }

        
    }

    async findAll(ctx){
        const user_id = ctx.state.user.id;
        const{pageNum = 1,pageSize = 10} = ctx.request.query;

       const res = await findAllAddr({user_id,pageNum,pageSize});


       ctx.body = {
           code:0,
           message:"查询地址成功",
           result:res
       }
    }

    async update(ctx){
        const {id} = ctx.request.params;
        

        try {
            const res = await updateAddr(id,ctx.request.body); 
            if(res[0] == 0){
                return  ctx.app.emit("error",addressUpdateError,ctx);
            }else{
                ctx.body ={
                    code:0,
                    message:"修改地址成功",
                    result:res
                }
            }
        } catch (error) {
            console.error(error);
            return  ctx.app.emit("error",addressUpdateError,ctx);  
        } 
    }
    async remove(ctx){
        const id = ctx.request.params.id;
        
        try {
            const res = await removeAddre(id);
            if(res > 0){
                ctx.body = {
                    code:0,
                    message:"删除地址成功",
                    result:res
                }
            }else{
                return ctx.app.emit("error",addressRemoveError,ctx);
            }
        } catch (error) {
            console.error(error);
            return ctx.app.emit("error",addressRemoveError,ctx);
        }
    }
    async setDefault(ctx){
        const id = ctx.request.params.id;
        const user_id = ctx.state.user.id;
        
        try {
            const res = await setDefaultAddr(id,user_id);
            console.log(res);
            if(res[0] == 1){
                ctx.body = {
                    code:0,
                    message:"设置默认成功",
                    result:res
                }
            }else{
                return ctx.app.emit("error",setDefaultError,ctx);
            }
        } catch (error) {
            console.error(error);
            return ctx.app.emit("error",setDefaultError,ctx);
        }
        
    }
}

module.exports = new AddressController();