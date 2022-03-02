const {DataTypes} = require("sequelize");

const seq = require("../db/seq");

const Goods = require("./gooods.model");//联表查询

//  定义Cart模型
const Cart = seq.define("zd_carts",{
    goods_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: '商品的id',
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: '用户的id',
      },
      number: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
        comment: '商品的数量',
      },
      selected: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
        comment: '是否选中',
      },
})

//同步数据 建表
// Cart.sync({force:true});


//https://blog.csdn.net/lvyuan1234/article/details/86727703


//B.belongsTo(A) B定义的是外键 A是定义来源
Cart.belongsTo(Goods,{
  foreignKey:"goods_id",//foreignKey是Cart表的外键
  targetKey:"id",
  //如果不指定targetKey属性，默认关联的是Goods表的主键id
  as:"goods_info"
});

module.exports = Cart;