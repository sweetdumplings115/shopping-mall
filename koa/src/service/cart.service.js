const {Op} = require("sequelize");
const Cart =  require("../model/cart.model");

const Goods = require("../model/gooods.model");

class CartService{
    async createOrUpdate(user_id,goods_id){
        //根据user_id,goods_id查找记录
        let res =  await Cart.findOne({
            where:{
                [Op.and]:{
                    user_id,
                    goods_id,
                }
            }
        })

        if(res){
            //找到记录，number + 1
            await res.increment("number");
            return await res.reload();//返回更新以后的数据
        }else{
            const res = await Cart.create({user_id,goods_id});
            return res;
        }
    }

    async findCarts(pageNum,pageSize,id){
        const offset = (pageNum - 1) * pageSize;
        const {count,rows} = await Cart.findAndCountAll({
            attributes:["id","number","selected"],
            offset:offset,
            limit: pageSize * 1,
            include:{//联表查询
                model:Goods,
                as:"goods_info",//别名
                attributes:["id","goods_name","goods_price","goods_img"]//选择特定属性
            },
            where:{user_id:id}
        })

        return {
            user_id:id,
            pageNum,
            pageSize,
            total:count,
            list:rows
        }

    }

    async updateCarts(params){
        const {id,number,selected} = params;
        const res = await Cart.findByPk(id);//findByPk 方法使用提供的主键从表中仅获得一个条目.
        if(!res){
            return "";
        }

        number !== undefined ? (res.number = number) : '';
        selected !== undefined ? (res.selected = selected) : '';

         return await res.save();

    }

    async removeCarts(ids,user_id){
      return await Cart.destroy({
                where:{
                    id:{
                       [Op.in]:ids
                    },
                    user_id
                }
      })
    }

    async selectAllCarts(id,allOrNone){
    return  await Cart.update({selected:allOrNone},{
            where:{
                user_id:id
            }
        })
    }

}

module.exports = new CartService();