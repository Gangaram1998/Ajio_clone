const mongoose=require("mongoose")

const cartSchema=new mongoose.Schema({
    productId:{
        required:true,
        type:String
    },
    size:{
        required:true,
        type:String
    },
    image:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    userId:{
        required:true,
        type:String
    },
    quantity:{
        required:true,
        default:1,
        type:Number
    }
},{
    versionKey:false,
    timestamps:true
})

const CartModel=mongoose.model("cart",cartSchema)

module.exports={
    CartModel
}