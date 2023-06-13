const  { CartModel } =require("../models/cartModel")

const addtoCart=async(req,res)=>{
    const {productId,size,image,name,price,userId,quantity}=req.body
    try{
        const product=new CartModel({productId,size,image,name,price,userId,quantity})
        await product.save()
        res.send({
            message:"successfully added to cart",
            status:200,
            err:false,
            product
        })
    }catch(err){
        res.send({
            message:"something went wrong",
            err:true,
            err,
            status:400
        })
    }
}

const getCartdata=async(req,res)=>{
    const {userId}=req.body
    try{
        const products= await CartModel.find({userId})
        const total=await CartModel.find({userId}).countDocuments()
        res.send({
            message:"Cart Data",
            products,
            total,
            err:false,
            status:200
        })
    }catch(err){
        res.send({
            message:"something went wrong",
            err:true,
            err,
            status:400
        })
    }
}


module.exports={
    addtoCart,
    getCartdata
}