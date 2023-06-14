import { Box ,Button,Text} from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router'

const AdminSidebar = () => {
    const navigate=useNavigate()
  return (
    <Box  width={"20%"} bg={"gray.50"} minH={"800px"} padding={"20px"}>
        <Text fontSize={"25px"} fontWeight={"700"} color={"black"}>Menu</Text>
        <Button mt="80px" px={"30px"} color={"white"} bg={"orange"} _hover={{bg:"white",color:"orange",border:"1px solid orange"}} onClick={()=>navigate("/admin/dashboard")}>Admin Dashboard</Button>
        <Button mt="50px" px={"70px"} color={"white"} bg={"orange"} _hover={{bg:"white",color:"orange",border:"1px solid orange"}} onClick={()=>navigate("/admin/admins")}>Admins</Button>
        <Button mt="50px" px={"68px"} color={"white"} bg={"orange"} _hover={{bg:"white",color:"orange",border:"1px solid orange"}} onClick={()=>navigate("/admin/products")}>Products</Button>
        <Button mt="50px" px={"55px"} color={"white"} bg={"orange"} _hover={{bg:"white",color:"orange",border:"1px solid orange"}} onClick={()=>navigate("/admin/addproducts")}>Add Product</Button>
        <Button mt="50px" px={"80px"} color={"white"} bg={"orange"} _hover={{bg:"white",color:"orange",border:"1px solid orange"}} onClick={()=>navigate("/admin/orders")}>Orders</Button>
        <Button mt="50px" px={"80px"} color={"white"} bg={"orange"} _hover={{bg:"white",color:"orange",border:"1px solid orange"}} >Log Out</Button>
    </Box>
  )
}

export default AdminSidebar