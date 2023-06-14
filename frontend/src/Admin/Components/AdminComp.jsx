import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'

const AdminComp = () => {
    const admin=false
    return (
        <Box  bg={"green.100"} width={"80%"} height={"100px"} display={"flex"} alignItems={"center"}>
            <Box width={"15%"} height={"100%"}  >
                <Image ml={"20px"} width={"70%"} height={"90%"} mt={"5px"} />
            </Box>
            <Box width={"60%"} height={"100%"}  display={"flex"} alignItems={"center"} >
                <Text width={"100%"} fontSize={"25px"} fontWeight="500"  color={"black"}>Gangaram Gawade</Text>
            </Box>
            <Box display={"flex"} alignItems={"center"} >
                <Button px={"auto"} display={admin?"block":"none"} padding={"10px 30px"} ml={"65px"} color={"white"} bg={"orange"} _hover={{color:"orange",bg:"white",corder:"1px solid orange"}}>Disable</Button>
                <Button px={"auto"} display={admin?"none":"block"}  padding={"10px 30px"} ml={"65px"} color={"white"} bg={"orange"} _hover={{color:"orange",bg:"white",corder:"1px solid orange"}}>Make Admin</Button>
            </Box>
            
        </Box>
    )
}

export default AdminComp