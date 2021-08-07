require('dotenv').config()
const express=require("express")
const path =require("path")



const app=express()

//Middlewares
app.use(express.json())

const indexRouter=require("./routes/index")


// Mongoose connection
const mongoose=require("mongoose")
mongoose.set('useCreateIndex', true)
mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true, useUnifiedTopology: true })
const db=mongoose.connection
db.on("error",error=>console.error(error))
db.once("open",()=>console.log("Connected to Mongoose"))




// 
// if (process.env.NODE_ENV === "production") {
//   // Set static folder
//   app.use(express.static("views/build"));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "views", "build", "index.html"));
//   });
// }
// 
// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', "*");

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.use("/",indexRouter)
app.listen(process.env.PORT || 5000, ()=>console.log("Server started on Port",process.env.PORT || 5000))

