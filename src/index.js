import express from 'express'
import dotenv from "dotenv"
import connectDB from "./db/index.js";
// require('dotenv').config({path: './env'})
// import mongoose from 'mongoose'
// import app from './app.js'
const app = express();



app.get('/',(req,res)=>{
    res.send('server is ready');
});




dotenv.config({
    path: './.env'
})



connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})






// app.get('/',(req,res)=>{
//     res.send('server is ready');
// });

// const port = process.env.PORT || 3000;



// app.listen(port,()=>{
//     console.log(`serve at http://localhost:${port}`);
// });