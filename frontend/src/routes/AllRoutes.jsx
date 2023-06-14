import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from '../pages/Login'
import { Register } from '../pages/Register'
import { Cart } from '../pages/Cart'
import ProductPage from '../pages/ProductPage'
import { HomePage } from '../pages/HomePage'
import SingleProductPage from '../pages/SingleProductPage'
import { Dashoard } from '../Admin/Pages/Dashoard'
import { Admins } from '../Admin/Pages/Admins'
import { Orders } from '../Admin/Pages/Orders'
import { Addproducts } from '../Admin/Pages/Addproducts'
import { Products } from '../Admin/Pages/Products'


export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path='/product/:type/:maincategory' element={<ProductPage/>}/>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/singleproductpage/:id' element={<SingleProductPage/>}/>
        <Route path='/admin/dashboard' element={<Dashoard/>} />
        <Route path='/admin/admins' element={<Admins/>} />
        <Route path='/admin/products' element={<Products/>} />
        <Route path='/admin/addproducts' element={<Addproducts/>} />
        <Route path='/admin/orders' element={<Orders/>} />
    </Routes>
  )
}
