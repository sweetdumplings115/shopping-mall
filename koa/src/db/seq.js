const {Sequelize} = require("sequelize");

const {
    MYSQL_HOST,
    MYSQL_DB_NAME,
    MYSQL_USER,
    MYSQL_PSWD
} = require("../config/config.default");
const seq = new Sequelize(MYSQL_DB_NAME,MYSQL_USER,MYSQL_PSWD,{
    host:MYSQL_HOST,
    dialect:"mysql"
})

// seq.authenticate().then(res => {
//     console.log('数据库连接成功');
// }).catch(err => {
//     console.error('数据库连接失败', err);
// })

module.exports =  seq;