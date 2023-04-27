import express from 'express';
import router from './router/routes.js';
const app = express();
import bodyParser from "body-parser";
import { sequelize } from "./db/db.js"
import cors from 'cors';


const port = 3060;
app.use(bodyParser.json());
app.use(cors())

sequelize.sync()
.then((res)=>{
console.log(res);
})
.catch((err)=>{
console.log(err);
})


app.listen(port,(req,res)=>{
    console.log(`Server is running on port ${port}`)
});

app.use('/todos',router);
