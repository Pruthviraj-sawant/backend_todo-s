//import th model

const todo=require("../model/todo");
//define route handler

exports.updatetodo=async(req,res)=>{


    try{
        //fetch all todo items 
        const id=req.params.id;
        const {title,description}=req.body;
        const updatetodo=await todo.findByIdAndUpdate(
            {_id: id},
        {title,description,updatedAt:Date.now()},)
        //send json response with success flag

 res.status(200).json(
 {
     success:true,
    data:updatetodo,
   message:`entry updated successfully at ${id}`
 })
    }
    catch(error){
        console.error(error)
        console.log(error),
        res.status(500).json(
            {
                success:false,
                data:"internal server error",
                message:'message',
            }
           );
     
      
    }
    
    }