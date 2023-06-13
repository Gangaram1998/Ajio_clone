import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from '../pages/Login'
import { Register } from '../pages/Register'
import { Cart } from '../pages/Cart'
import ProductPage from '../pages/ProductPage'
import { HomePage } from '../pages/HomePage'
import SingleProductPage from '../pages/SingleProductPage'


export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path='/product/:type/:maincategory' element={<ProductPage/>}/>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/singleproductpage/:id' element={<SingleProductPage/>}/>
    </Routes>
  )
}
