
import  express  from "express"
import mongoose from 'mongoose'
const app= express()
// add user routes
const userRoutes= require("./routes/user")
// add body parser
const bodyParser= require("body-parser")
// add cors
const cors= require("cors")
// add dotenv
require("dotenv").config()



app.listen(5000, () => {
    console.log("server is running on port 5000");
  });