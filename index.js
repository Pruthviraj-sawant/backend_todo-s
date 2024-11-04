const express=require('express');
const app=express();

// app.listen(3000,()=>{
// console.log(" listen on port 3000");
// });

require('dotenv').config();
const port = process.env.port || 4000;

//middleware to parse json request body
app.use(express.json());

//import routes
const todoroutes=require("./routes/todos");

//mounte
app.use("/api/v1", todoroutes);

//start 
app.listen(port,()=>{
console.log(`server stsarted at ${port}`);  
})
//connect to database
const dbconnect=require("./conf/database");
dbconnect();

//default route
app.get("/",(req,res)=>{
    res.send(`<h1>this is home page....</h1>`)
})

  