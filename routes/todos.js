const exp= require('express');
const router=exp.Router();

//import controoler
const {createtodo}=require("../controller/createtodo");
const {gettodo,gettodoid}=require("../controller/gettodo");
const {updatetodo}=require("../controller/updatetodo");
const {deletetodo}=require("../controller/deletetodo");
//define api routes
router.post("/createtodo",createtodo);
router.get("/gettodo",gettodo);
router.get("/gettodo/:id",gettodoid);
router.put("/updatetodo/:id",updatetodo);
router.delete("/deletetodo/:id",deletetodo);
module.exports=router;