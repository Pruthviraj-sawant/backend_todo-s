//import th model
const todo=require("../model/todo");
//define route handler
exports.deletetodo=async(req,res)=>{


try{
          //extrat title des from req body
          
          //create new todo obj and insert into it
          const id= req.params.id;
          await todo.findByIdAndDelete({_id: id});
           //send json response with success flag
           res.status(200).json(
            {
                success:true,
                message:'deleted........'
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