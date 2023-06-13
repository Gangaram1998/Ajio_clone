const { ProductModel } = require("../models/productModel");
const jwt=require("jsonwebtoken")
require("dotenv").config()


const getProduct=async(req,res)=>{
    const {minPrice,maxPrice,category,minDiscount,maxDiscount,page,order}=req.query;
    const categoryFilter=category?{category:category}:{}
    if(order==="desc"){
        price= -1
    }else{
        price= 1
    }
    const priceFilter={}
    if(maxPrice&&minPrice){
        priceFilter.price={$gte:parseInt(minPrice),$lte:parseInt(maxPrice)}
    }
    const discountFilter={}
    if(maxDiscount&&minDiscount){
        discountFilter.discount={$gte:parseInt(minDiscount),$lte:parseInt(maxDiscount)}
    }
    const pageNumber= page || 1
    const limitNumber=10
    let skip=(pageNumber-1)*limitNumber

    try{
        const total=await ProductModel.find({...priceFilter,...discountFilter,...categoryFilter}).countDocuments()
        const products=await ProductModel.find({...priceFilter,...discountFilter,...categoryFilter}).skip(skip).limit(limitNumber).sort({price})
        res.send({
            message:"All Products",
            err:false,
            products,
            total,
            status:200
        })
    }catch(err){
        res.send({
            message:"Something went wrong",
            err:true,
            status:400,
            err
        })
    }
}

const addProduct=async(req,res)=>{
    const {image,brand,gender,name,price,originalPrice,category,quantity}=req.body
    const token=req.headers.authorization
    try{
        const decoded= jwt.verify(token,process.env.Secretkey)
       const product=new ProductModel({image,brand,gender,name,price,originalPrice,category,quantity,adminId:decoded.userId})
       await product.save()
       res.send({
        message:"Product added successfully!",
        err:false,
        product
       })
    }catch(err){
        res.send({
            status:400,
            err,
            message:"Something went wrong"
        })
    }
}

const singleProduct=async(req,res)=>{
    const id=req.params.id
    try{
        const product=await ProductModel.findById({_id:id})
        res.send({
            message:"singleProduct",
            err:false,
            status:200,
            product
        })
    }catch(err){
        res.send({
            status:400,
            err,
            message:"Something went wrong"
        })
    }
}

module.exports={
    getProduct,
    addProduct,
    singleProduct
}