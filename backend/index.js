const express=require("express")
const cors=require("cors")
const { connection } = require("./db")
const { userRouter } = require("./routes/userRoutes")
require("dotenv").config()


const app=express()
app.use(express.json())
app.use(cors())

app.use("/user",userRouter)


app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("connected to database and running at", process.env.port)
    }catch(err){
        console.log(err)
    }
})