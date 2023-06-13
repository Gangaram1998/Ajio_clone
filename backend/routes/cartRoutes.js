const express=require("express")
const { addtoCart, getCartdata } = require("../controllers/cartController")
const { CartValidator } = require("../middlewares/CartValidator")

const cartRouter=express.Router()

cartRouter.post("/addproduct",CartValidator,addtoCart)
cartRouter.get("/getcart",CartValidator,getCartdata)

module.exports={
    cartRouter
}