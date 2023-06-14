import React from 'react'
import AdminSidebar from '../Components/AdminSidebar'
import { Box, HStack,Text } from '@chakra-ui/react'
import Paginantion from '../../components/Pagination'
import ProductComp from '../Components/ProductComp'

export const Products = () => {
    return (
        <>
            <HStack>
                <AdminSidebar />
                <Box width={"80%"} height={"200px"} alignSelf={"baseline"} padding={"20px"}>
                    <Text bg={'gray.100'} boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" padding={"20px"} fontSize={"20px"} fontWeight={"700"}>PRODUCTS</Text>
                    <Text padding={"20px"} fontSize={"18px"} fontWeight={"500"}>Total: 1000</Text>
                    <Box mt={"20px"} height={"auto"} width={"100%"} display={"flex"} flexDirection={"column"} gap={"20px"} justifyContent={"center"} alignItems={"center"}>
                        <ProductComp/>
                    </Box>
                    <Paginantion />
                </Box>
            </HStack>
        </>
    )
}
