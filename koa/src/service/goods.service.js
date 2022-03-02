const Goods = require("../model/gooods.model");

class GoodsService{
    async createGoods(goods){
      const res =   await  Goods.create(goods);
      return res.dataValues
    }

   
    async updateGoods(id, goods) {
        const res = await Goods.update(goods, { where: { id } });//id要加括号 即{id}
        return res[0] > 0 ? true : false
      }

    async removeGoods(id){
        const res = await Goods.destroy({where:{id},force: true});//加偏执表后硬删除要加force: true
        // console.log(res);
        return res > 0 ? true : false
    }

    async softRemoveGoods(id){
        const res = await Goods.destroy({where:{id}});//加偏执表后软删除不用
        // console.log(res);
        return res > 0 ? true : false
    }

    async restoreGoods(id){
        const res = await Goods.restore({where:{id}});
        return res > 0 ? true : false
    }

    async  findGoods(pageNum,pageSize){
       

        //获取总数
        // const count = await Goods.count();//仅获取未删除的记录 

        //获取分页具体情况
        // const offset = (pageNum - 1) * pageSize;
        // const rows = await Goods.findAll({offset:offset,limit:pageSize * 1});//pageSize * 1 转换为number类型
        //有偏执表实现软删除,findAll 方法将看不到软删除的记录,仅获取未删除的记录.

        const offset = (pageNum - 1) * pageSize;

        const{count,rows} = await Goods.findAndCountAll({offset:offset,limit:pageSize * 1})

        return {
            pageNum,
            pageSize,
            total:count,
            list:rows
        }
    }

    async findGood(id){
        const res = await Goods.findOne({where:{id}});
        return res ? true :false;
    }
}

module.exports = new GoodsService();