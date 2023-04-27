import { Sequelize,DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";



export const TodoModel = sequelize.define("todo",
{
    id:{
      type:Sequelize.INTEGER,
      autoIncrement:true,
      allowNull:false,
      primaryKey:true
    },
    task_name:{
       type:Sequelize.STRING,
       allowNull:false

    },
    priority:{
        type:Sequelize.STRING,
        allowNull:false
    }
})