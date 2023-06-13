import { Box, Button, Image,Select,Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const CartComponent = () => {
    const [quantity,setQuantity]=useState(1)
    console.log(quantity)
  return (
    <Box border={"1px solid gray"} width={"100%"} height={"200px"} display={"flex"} gap={"20px"}>
        <Box width={"20%"} >
            <Image width={"100%"} height={"100%"} src="https://assets.ajio.com/medias/sys_master/root/20220513/Bzem/627e23eaaeb26921af76c88d/the_bear_house_grey_checked_slim_fit_shirt.jpg" alt='image'/>
        </Box>
        <Box width={"50%"}  display={"flex"} padding={"20px"} gap={"10px"}>
            <Text color={"gray.500"}>Checked Slim Fit Shirt</Text>
            <Text color={"gray.500"}>size: s</Text>
            <Text color={"gray.500"}>quantity:</Text>
            <select style={{height:"20px",mt:"10px"}} onChange={(e)=>setQuantity(e.target.value)} >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
            </select>
        </Box>
        <Box width={"30%"}  padding={"60px"}>
            <Text mb={"20px"} bg={"green.200"} fontSize={"18px"} fontWeight={"600"}>₹ 2500</Text>
            <Button bg={"none"} color={"blue.600"}>Delete</Button>
        </Box>
    </Box>
  )
}

export default CartComponent