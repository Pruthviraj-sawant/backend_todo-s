//import th model
const todo=require("../model/todo");
//define route handler
exports.createtodo=async(req,res)=>{


try{
          //extrat title des from req body
          const{title,description}=req.body;
          //create new todo obj and insert into it
          const response=await todo.create({title,description});
           //send json response with success flag
           res.status(200).json(
            {
                success:true,
                data:response,
                message:'entry created successfully'
            }
           );
}
catch(error){
    console.error(err)
console.log(err),
res.status(500).json(
    {
        success:false,
        data:"internal server error",
        message:'message',
    }
   );
 
  
}

}