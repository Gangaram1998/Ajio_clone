import React, { useEffect, useState } from 'react'
import CartNavbar from '../components/CartNavbar'
import { HStack, VStack ,Text, Box} from '@chakra-ui/layout'
import CartComponent from '../components/CartComponent'
import { Button } from '@chakra-ui/button'
import {  DeleteCartItem, GetCardData, UpdateCart } from '../redux/cartReducer/action'
import { useDispatch, useSelector } from 'react-redux'
import { useDisclosure, useToast } from '@chakra-ui/react'
import { AddressNPayment } from '../components/Address&Payment'

export const Cart = () => {
    const dispatch=useDispatch()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {userId,token}=useSelector((store)=>store.authReducer)
    const {cartData,total,totalPrice}=useSelector((store)=>store.cartReducer)
    const [change,setChange]=useState(false)
    const toast=useToast()


    const [state,setState]=useState("")
    const [dist,setDist]=useState("")
    const [pin,setPin]=useState(null)
    const [houseno,setHouseno]=useState(null)
    const [mb,setMb]=useState(null)
    const [payment,setPayment]=useState("")


    const hanldeAddress=()=>{
        if(state==="" || dist==="" || pin===null || houseno===null || mb===null){
            return toast({
                title:"ERROR",
                description:"please fill all details",
                status:"error",
                isClosable:true,
                duration:9000
            })
        }
        if(payment===""){
            return toast({
                title:"ERROR",
                description:"please select payment option",
                status:"error",
                isClosable:true,
                duration:9000
            })
        }
        let obj={
            address:{
                state:state,
                district:dist,
                pin_code:pin,
                house_number:houseno
            },
            mobile_number:mb,
            products:[
                ...cartData
            ]
        }
        onClose()
    }












    const handleDelete=(id)=>{
        dispatch(DeleteCartItem(id,token))
        setChange(prev=>!prev)
    }
    const handleQuantity=(id,n,p)=>{
        let obj={
            count:n,
            p
        }
        dispatch(UpdateCart(id,obj,token))
        setChange(prev=>!prev)
    }
    
    useEffect(()=>{
        dispatch(GetCardData(userId,token))
    },[change])
  return (
    <>
        <CartNavbar/>
        <HStack  width={"80%"} mt={"105px"} marginX={"auto"} height={"auto"}>
            <VStack width={"75%"}  height={"100%"} align={"start"} padding={"10px"}>
                <Text fontSize={"20px"} color={"black"} fontWeight={"600"}>My Bag <span style={{fontSize:"16px",color:"gray"}}>({total} Items)</span></Text>
                <Box width={"100%"} mt={"20px"} display={"flex"} flexDirection={"column"} gap={"20px"} padding={"30px"}>
                    {
                        cartData?.map((el)=>{
                            return <CartComponent image={el.image} key={el._id} name={el.name} size={el.size} quantity={el.quantity} price={el.price} id={el._id} originalPrice={el.originalPrice}  handleDelete={handleDelete} handleQuantity={handleQuantity}  number={el.quantity}/>
                        })
                    }
                </Box>
            </VStack>
            <VStack width={"25%"}   height={"100%"} alignSelf={"baseline"}>
                <Box display={"flex"} flexDirection={"column"}  alignItems={"flex-start"} width={"100%"} padding={"10px 20px"} bg={"gray.100"}gap={"15px"}>
                    <Text fontSize={"18px"} fontWeight={"600"} color={"gray"}>Order Details</Text>
                    <Text>Bag Total:     <span style={{font:"20px",fontWeight:"500",marginLeft:"135px"}}>₹ {totalPrice}</span></Text>
                    <Text>Order Total:   <span style={{font:"20px",fontWeight:"500",marginLeft:"120px"}}>₹ {totalPrice}</span></Text>
                    <Button px={"40px"} mt={"20px"} borderRadius={"none"} bg={"orange.400"} color={"white"} onClick={onOpen}>PROCEED TO SHIPPING</Button>
                </Box>
                <Box display={"flex"} flexDirection={"column"}  alignItems={"flex-start"} width={"100%"} padding={"10px 20px"} bg={"gray.100"} >
                    <Text fontWeight={"600"}>Return/Refund Policy</Text>
                    <Text width={"100%"}>In case of return, we ensure quick refunds. Full amount will be refunded excluding Convenience Fee</Text>
                </Box>
            </VStack>
            <AddressNPayment isOpen={isOpen} onClose={onClose} setState={setState} setDist={setDist} setHouseno={setHouseno} setPin={setPin} setMb={setMb} handleAddress={hanldeAddress} payment={payment} setPayment={setPayment}/>
        </HStack>
    </>
  )
}
