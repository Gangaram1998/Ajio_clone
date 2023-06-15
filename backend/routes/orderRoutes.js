const express=require("express")
const { orderProduct } = require("../controllers/orderController")
const { Authenticator } = require("../middlewares/Authenticator")
const orderRouter=express.Router()


orderRouter.post("/addproduct",orderProduct)


module.exports={
    orderRouter
}