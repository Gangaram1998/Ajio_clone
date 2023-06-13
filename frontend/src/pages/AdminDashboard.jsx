import React from 'react'
import AdminSidebar from '../components/AdminSidebar'
import { HStack } from '@chakra-ui/layout'

const AdminDashboard = () => {
  return (
    <>
        <HStack>
            <AdminSidebar/>
        </HStack>
    </>
  )
}

export default AdminDashboard