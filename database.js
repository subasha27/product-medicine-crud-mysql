const { error } = require("@hapi/joi/lib/base");
const {Sequelize} = require("sequelize");

const sequelize = new Sequelize(
    'meddata',
    'root',
    'rootpass',{
        host : 'localhost',
        dialect: 'mysql',
        Table: 'meddetails'
    }
)

sequelize.authenticate().then(() => {
    console.log('connection has been established')
}).catch((error)=>{
    console.error('Unable to connect to the database',error)
})

module.exports = sequelize;