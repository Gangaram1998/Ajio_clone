const jwt=require("jsonwebtoken")
require("dotenv").config()
const CartValidator=async(req,res,next)=>{
    const token=req.headers.authorization
    try{
        console.log(token)
        const decoded=jwt.verify(token,process.env.Secretkey)
        if(decoded){
            next()
        }
    }catch(err){
        console.log("validator",err)
        res.send({
            in:"Validator",
            message:"something went wrong",
            err,
            err:true,
            status:400
        })
    }
}

module.exports={
    CartValidator
}