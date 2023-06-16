const express=require("express")
const { getProduct, addProduct, singleProduct, DeleteProduct, UpdateProduct } = require("../controllers/productController")
const { AdminValidator } = require("../middlewares/AdminValidator")
const { updateProduct } = require("../controllers/productController")

const productRouter=express.Router()

productRouter.get("/",getProduct)
productRouter.post("/addproduct",AdminValidator,addProduct)
productRouter.get("/singleproduct/:id",singleProduct)
productRouter.delete("/delete/:id",AdminValidator,DeleteProduct)
productRouter.patch("/update/:id",AdminValidator,UpdateProduct)


module.exports={
    productRouter
}