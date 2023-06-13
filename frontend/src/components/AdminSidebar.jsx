import { Box ,Button,Text} from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router'

const AdminSidebar = () => {
    const navigate=useNavigate()
  return (
    <Box border={"1px solid black"} width={"20%"} bg={"green.100"} minH={"700px"} padding={"20px"}>
        <Text fontSize={"20px"} fontWeight={"700"} color={"gray.500"}>Menu</Text>
        <Button mt="30px" px={"30px"} onClick={()=>navigate("/dashboard")}>Admin Dashboard</Button>
        <Button mt="30px" px={"70px"}>Admins</Button>
        <Button mt="30px" px={"68px"}>Products</Button>
        <Button mt="30px" px={"55px"}>Add Product</Button>
        <Button mt="30px" px={"80px"}>Orders</Button>
    </Box>
  )
}

export default AdminSidebar