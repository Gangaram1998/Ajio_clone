const express=require("express")
const { getProduct, addProduct, singleProduct } = require("../controllers/productController")
const { AdminValidator } = require("../middlewares/AdminValidator")

const productRouter=express.Router()

productRouter.get("/",getProduct)
productRouter.post("/addproduct",AdminValidator,addProduct)
productRouter.get("/singleproduct/:id",singleProduct)


module.exports={
    productRouter
}