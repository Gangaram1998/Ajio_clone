import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from '../pages/Login'
import { Register } from '../pages/Register'
import { Cart } from '../pages/Cart'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/cart" element={<Cart/>}/>
    </Routes>
  )
}
