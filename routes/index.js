const express=require("express")
const GrocerySchema=require("../models/GrocerySchema")
// let GrocerySeed=require("../seed/groceryseed")
// const itm=[{
//   id:1,
//   name:"Watermelon",
//   description:"it is sweat"
// },
// {
//   id:2,
//   name:"Carots",
//   description:"it is nice"
// },
// {
//   id:1,
//   name:"Ananas",
//   description:"it is some how sweat"
// },
// ]

const router =express.Router()

router.get("/items",async(req,res)=>{
  // res.json({success:true,data:GrocerySeed})
  try{
    const items = await GrocerySchema.find()
    res.json(items)
  }catch(err){
    res.json({message:err})
  }
})

// Get single Item 
router.get("/items/:itemId",async(req,res)=>{
  try{
    const item=await GrocerySchema.findOne({_id:req.params.itemId})
    console.log(item);
    res.json(item)
  }catch(err){
    res.json({message:err})
  }
})
// Post new item
router.post("/items",async(req,res)=>{
  console.log(req.body);
  const item = new GrocerySchema(req.body)
  item.save()
  
  res.status(201).json({
    status:"success",
    data:{
      item
    }
  })

})

// Update One

  router.patch("/items/:itemId",async (req,res)=>{
    try{
      const updatedItem=await GrocerySchema.updateOne({_id:req.params.itemId},{$set:{name:req.body.name}})
      res.json(updatedItem)
    }catch(err){
      res.json({message:err})
    }
  })


// Update Many
router.put("/items/:itemId",async (req,res)=>{
  try{
    const updatedItem=await GrocerySchema.updateMany({_id:req.params.itemId},{$set:{name:req.body.name,image:req.body.image,description:req.body.description,price:req.body.price}})
    res.json(updatedItem)
  }catch(err){
    res.json({message:err})
  }
})
// Delete Post
router.delete("/items/:itemId", async (req,res)=>{
  try{
    const removedPost=await GrocerySchema.remove({_id: req.params.itemId})
    res.json(removedPost)
  }catch(err){
    res.json({message:err})
  }
})








module.exports=router
