import { Box, Image, Button, Text } from '@chakra-ui/react'
import React from 'react'

const OrderComp = () => {
    return (
        <Box bg={"green.100"} width={"80%"} height={"100px"} display={"flex"} alignItems={"center"}>
            <Box width={"15%"} height={"100%"}  >
                <Image ml={"20px"} width={"70%"} height={"90%"} mt={"5px"} />
            </Box>
            <Box width={"50%"} height={"100%"} display={"flex"} alignItems={"center"} >
                <Text width={"100%"} fontSize={"18px"} fontWeight="500" color={"black"}>UserID:<br/>1000</Text>
                <Text width={"100%"} fontSize={"18px"} fontWeight="500" color={"black"}>ProductID:<br/>1000</Text>
                <Text width={"100%"} fontSize={"18px"} fontWeight="500" color={"black"}>Quantity:<br/>3</Text>
            </Box>
            <Box display={"flex"} alignItems={"center"} >
                {true?<Button px={"auto"} padding={"5px 20px"} ml={"65px"} color={"white"} bg={"green"}>Completed</Button>:
                <Button px={"auto"} padding={"5px 20px"} ml={"65px"} color={"white"} bg={"red"}>Pending</Button>}
            </Box>
        </Box>
    )
}

export default OrderComp