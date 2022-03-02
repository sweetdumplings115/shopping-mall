const Order = require("../model/order.model");


class OrderService{
    async createOrder(order){
      return  await Order.create(order);
    }

    async findAllOrder(id,pageNum,pageSize,status){
      const offset = (pageNum - 1) * pageSize;
      const {count,rows} = await Order.findAndCountAll({
        where:{
          status,
          user_id:id
        },
        offset:offset,
        limit:pageSize * 1,
        attributes:["goods_info","total","order_number","status"]
      })

      return {
        pageNum,
        pageSize,
        total:count,
        list:rows
      }
    }

    async updateOrder(user_id,id,status){
      return await Order.update({status},{where:{id,user_id}})
    }

}

module.exports = new OrderService();