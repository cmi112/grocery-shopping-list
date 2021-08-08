require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");

const createError=require("http-errors")


const itemsRouter = require("./routes/itemRoutes");


const { port, mongoURL } = require("./config/env");
const path = require("path");
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("error", console.error);
mongoose.connection.on("open", () => {
  console.log("Database connected!");
});

const app = express();




app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/client/index.html")
})

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


app.use("/items", itemsRouter);
if (process.env.NODE_ENV === "production") {
  
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
// Error Handling 
app.use((err,req,res,next)=>{
  res.status(err.status || 500).send({success:false,message:err.message})
})















app.listen(port, () => {
  console.log("====================================");
  console.log("Server start with port: " + port);
  console.log("====================================");
});

