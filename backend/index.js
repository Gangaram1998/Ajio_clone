const express=require("express")
const cors=require("cors")
const { connection } = require("./db")
const { userRouter } = require("./routes/userRoutes")
const { productRouter } = require("./routes/productRoutes")
const { cartRouter } = require("./routes/cartRoutes")
require("dotenv").config()


const app=express()
app.use(express.json())
app.use(cors())

app.use("/user",userRouter)
app.use("/products",productRouter)
app.use("/cart",cartRouter)


app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("connected to database and running at", process.env.port)
    }catch(err){
        console.log(err)
    }
})