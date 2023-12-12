const { DataTypes } = require('sequelize')
const sequelize=require('../db')


const Task=sequelize.define('task',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title:{type:DataTypes.STRING},
    date:{type:DataTypes.STRING},
    main:{type:DataTypes.STRING},
    time:{type:DataTypes.STRING}
})
const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
})

// User.hasMany(Task)
// Task.belongsTo(User)



module.exports={
    Task,
    User
}