//import th model
const todo=require("../model/todo");
//define route handler
exports.gettodo=async(req,res)=>{


try{
    //fetch all todo items 
    const todos=await todo.find({});
    //send json response with success flag
    res.status(200).json(
     {
         success:true,
         data:todos,
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



exports.gettodoid=async(req,res)=>{


    try{
        //fetch all todo items 
        const id=req.params.id;
        const todos=await todo.findById({_id: id})
        //send json response with success flag


if(!todo){
    return res.status(404).json({
        success:false,
        message:"no data found",
    })
  }

 res.status(200).json(
 {
     success:true,
    data:todos,
   message:`entry created successfully at ${id}`
 })
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