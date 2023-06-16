import { Box ,Button,Text} from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router'
import { LogoutAction } from '../../redux/authReducer/action'
import { useDispatch } from 'react-redux'

const AdminSidebar = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
  return (
    <Box  width={"20%"} bg={"gray.50"} minH={"800px"} padding={"20px"}>
        <Text fontSize={"25px"} fontWeight={"700"} color={"black"} onClick={()=>navigate("/")}>AJIO</Text>
        <Button mt="20px" px={"35px"} color={"white"} bg={"orange"} _hover={{bg:"green",color:"white",border:"1px solid green"}} onClick={()=>navigate("/admin/dashboard")}>Admin Dashboard</Button>
        <Button mt="50px" px={"75px"} color={"white"} bg={"orange"} _hover={{bg:"green",color:"white",border:"1px solid green"}} onClick={()=>navigate("/admin/admins")}>Admins</Button>
        <Button mt="50px" px={"70px"} color={"white"} bg={"orange"} _hover={{bg:"green",color:"white",border:"1px solid green"}} onClick={()=>navigate("/admin/products")}>Products</Button>
        <Button mt="50px" px={"55px"} color={"white"} bg={"orange"} _hover={{bg:"green",color:"white",border:"1px solid green"}} onClick={()=>navigate("/admin/addproducts")}>Add Product</Button>
        <Button mt="50px" px={"80px"} color={"white"} bg={"orange"} _hover={{bg:"green",color:"white",border:"1px solid green"}} onClick={()=>navigate("/admin/orders")}>Orders</Button>
        <Button mt="50px" px={"75px"} color={"white"} bg={"orange"} _hover={{bg:"green",color:"white",border:"1px solid green"}} onClick={()=>navigate("/admin/users")}>Users</Button>
        <Button mt="50px" px={"80px"} color={"white"} bg={"orange"} _hover={{bg:"green",color:"white",border:"1px solid green"}} onClick={()=>{dispatch(LogoutAction);navigate("/")}} >Log Out</Button>
    </Box>
  )
}

export default AdminSidebar