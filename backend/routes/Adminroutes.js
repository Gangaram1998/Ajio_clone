const express=require("express")
const { GetDashboardData } = require("../controllers/admindashboardController")

const AdminRouter=express.Router()

AdminRouter.get("/dashboard",GetDashboardData)

module.exports={
    AdminRouter
}