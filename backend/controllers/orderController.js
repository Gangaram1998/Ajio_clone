const jwt=require("jsonwebtoken")
const { OrderModel }=require("../models/orderModel")
const { CartModel } = require("../models/cartModel")

 const orderProduct=async(req,res)=>{
    const {address,mobile_number,products}=req.body
    const token=req.headers.authorization
    try{
        const decoded= jwt.verify(token,process.env.Secretkey)
        const product=new OrderModel({address,mobile_number,products,userId:decoded.userId})
        await product.save()
        await CartModel.deleteMany({userId:decoded.userId})
        res.send({
            message:"Order Placed Successfully",
            err:false,
            status:200
        })
    }catch(err){
        res.send({
            message:"something went wrong",
            status:400,
            err:true,
            err
        })
    }
}


module.exports={
    orderProduct
}