const { OrderModel }=require("../models/orderModel");

const { UserModel } =require("../models/userModel");

const {ProductModel} =require("../models/productModel")
 const GetDashboardData=async(req,res)=>{
    try{
        const products= await ProductModel.find({}).countDocuments();
        const adminCount= await UserModel.find({role:"admin"}).countDocuments();
        const superCount= await UserModel.find({role:"superadmin"}).countDocuments();
        admins=adminCount+superCount
        const users= await UserModel.find({role:"user"}).countDocuments();
        const orders=await OrderModel.find({}).countDocuments()
        res.send({
            message:"Dashboard Data",
            status:200,
            err:false,
            products,
            admins,
            users,
            orders
        })
    }catch(err){
        res.send({
            message:"Something went wrong",
            err,
            err:true,
            status:400
        })
    }
}
module.exports={
    GetDashboardData
}