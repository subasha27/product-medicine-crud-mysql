const express = require("express");
const route = require('./router/router');
const dotenv = require("dotenv").config();
const sequelize = require("./database")


const app = express();
app.use(express.urlencoded({extended:true}));
app.use('/api',route);
app.use(express.json());

sequelize.sync();

const PORT = process.env.PORT||1800;
app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`)
})
