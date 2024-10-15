import express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
//connecting database
mongoose.connect(process.env.MONGO).then(() =>{
    console.log("Connected to MongoDB")
}).catch((err) =>{
    console.log("Error connecting DB" + err)
});
//intializing the application
const app = express();
//

app.listen(3000, ()=>{
 console.log("Server is runing on port 3000")
});

