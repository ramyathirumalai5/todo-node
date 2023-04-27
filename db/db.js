import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("todo_schema","root","rootpass",{
    dialect:"mysql",
    host:"localhost"
});
