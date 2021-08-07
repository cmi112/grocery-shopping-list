const mongoose=require("mongoose")
const GrocerySchema=new mongoose.Schema({
  name: {
    type:String,required:true
  },
  image: {
    type:String,required:true
  },
  description:{
    type:String
  }, 
  price:{
    type:Number,required:true

  },
  id:{
    type:Number
  }
})

module.exports=Grocerylist=mongoose.model("Grocerylist",GrocerySchema)