import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const AdminRoutes = ({ children }) => {
    const {isAuth,role} = useSelector((store) => store.authReducer)
    
    const location = useLocation();

    if (isAuth && (role==="admin" || role==="superadmin")) {
         return children
    }
    
    return <Navigate to={'/login'} state={location.pathname} replace />; 
}

export default AdminRoutes