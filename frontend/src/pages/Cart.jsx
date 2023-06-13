import React, { useEffect } from 'react'
import CartNavbar from '../components/CartNavbar'
import { HStack, VStack ,Text, Box} from '@chakra-ui/layout'
import CartComponent from '../components/CartComponent'
import { Button } from '@chakra-ui/button'
import { GetCardData } from '../redux/cartReducer/action'
import { useDispatch, useSelector } from 'react-redux'

export const Cart = () => {
    const dispatch=useDispatch()
    const {userId,token}=useSelector((store)=>store.authReducer)

    useEffect(()=>{
        let obj={
            userId
        }
        dispatch(GetCardData(obj,token))
    },[])
  return (
    <>
        <CartNavbar/>
        <HStack  width={"80%"} mt={"105px"} marginX={"auto"} height={"auto"}>
            <VStack width={"75%"}  height={"100%"} align={"start"} padding={"10px"}>
                <Text fontSize={"20px"} color={"black"} fontWeight={"600"}>My Bag <span style={{fontSize:"16px",color:"gray"}}>(100 Items)</span></Text>
                <Box width={"100%"} mt={"20px"} display={"flex"} gap={"10px"} padding={"30px"}>
                    <CartComponent/>
                </Box>
            </VStack>
            <VStack width={"25%"}   height={"100%"} alignSelf={"baseline"}>
                <Box display={"flex"} flexDirection={"column"}  alignItems={"flex-start"} width={"100%"} padding={"10px 20px"} bg={"gray.100"}gap={"15px"}>
                    <Text fontSize={"18px"} fontWeight={"600"} color={"gray"}>Order Details</Text>
                    <Text>Bag Total:     <span style={{font:"20px",fontWeight:"500",marginLeft:"135px"}}>₹1000</span></Text>
                    <Text>Order Total:   <span style={{font:"20px",fontWeight:"500",marginLeft:"120px"}}>₹1000</span></Text>
                    <Button px={"40px"} mt={"20px"} borderRadius={"none"} bg={"orange.400"} color={"white"}>PROCEED TO SHIPPING</Button>
                </Box>
                <Box display={"flex"} flexDirection={"column"}  alignItems={"flex-start"} width={"100%"} padding={"10px 20px"} bg={"gray.100"} >
                    <Text fontWeight={"600"}>Return/Refund Policy</Text>
                    <Text width={"100%"}>In case of return, we ensure quick refunds. Full amount will be refunded excluding Convenience Fee</Text>
                </Box>
            </VStack>
        </HStack>
    </>
  )
}
