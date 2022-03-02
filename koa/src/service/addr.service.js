const Address = require("../model/addr.model");

class AddressService{
    async createAddress(address){
     return   await Address.create(address);      
    }

    async findAllAddr(address){
        const {user_id,pageNum,pageSize} = address;
        const offset = (pageNum - 1) * pageSize;
        return  await Address.findAll({
            offset:offset,
            limit:pageSize * 1,
            where:{user_id},
            attributes:["id","phone","consignee","address","is_default"]
        })
    }

    async updateAddr(id,address){
        return await Address.update(address,{where:{id}});//where是导包的，小心
    }

    async removeAddre(id){
        return await Address.destroy({where:{id}})
    }

    async setDefaultAddr(id,user_id){
        await Address.update({is_default:false},{where:{user_id}});
        console.log(user_id);
        return await Address.update({is_default:true},{where:{user_id,id}})
    }
}

module.exports = new AddressService();