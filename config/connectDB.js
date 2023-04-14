const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('bookingtour', 'root', null, {
    host: 'localhost',
    dialect: 'mysql'
}) 

const connectDB = async() => {
    try {
        await sequelize.authenticate();
        console.log('Connect successfully');
    } catch (error) {
        console.log('Cannot connect: ',error);
    }
}

module.exports = connectDB;
