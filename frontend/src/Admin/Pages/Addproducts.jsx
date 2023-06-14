import React from 'react'
import AdminSidebar from '../Components/AdminSidebar'
import { Box, Button, FormControl, FormLabel, HStack, Input, Text } from '@chakra-ui/react'

export const Addproducts = () => {
    return (
        <>
            <HStack>
                <AdminSidebar />
                <Box width={"80%"} height={"200px"} alignSelf={"baseline"} padding={"20px"}>
                    <Text bg={'gray.100'} boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" padding={"20px"} fontSize={"20px"} fontWeight={"700"}>ADD PRODUCT</Text>
                    <Box mt={"20px"} height={"auto"} width={"40%"} mx={"auto"} my={"40px"} display={"flex"} flexDirection={"column"} gap={"20px"} justifyContent={"center"} alignItems={"center"}>
                        <FormControl>
                            <FormLabel>
                                Image:
                                <Input/>
                            </FormLabel>
                        </FormControl>
                        <FormControl>
                            <FormLabel>
                                Brand:
                                <Input/>
                            </FormLabel>
                        </FormControl>
                        <FormControl>
                            <FormLabel>
                                Name:
                                <Input/>
                            </FormLabel>
                        </FormControl>
                        <FormControl>
                            <FormLabel>
                                Price:
                                <Input/>
                            </FormLabel>
                        </FormControl>
                        <FormControl>
                            <FormLabel>
                                Category:
                                <Input/>
                            </FormLabel>
                        </FormControl>
                        <FormControl>
                            <FormLabel>
                                Quantity:
                                <Input/>
                            </FormLabel>
                        </FormControl>
                        <FormControl>
                            <Button padding={"10px 40px"} bg={"orange"} color={"white"}>Submit</Button>
                        </FormControl>
                    </Box>
                </Box>
            </HStack>
        </>
    )
}
