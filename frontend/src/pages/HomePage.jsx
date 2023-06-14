import React from 'react'
import Navbar from '../components/Navbar'
import { Box } from '@chakra-ui/react'
import OTP from '../components/OTP'

export const HomePage = () => {
  return (
    <>
        <Navbar/>
        <Box mt={"85px"}>homepage</Box>
        <OTP/>
    </>
  )
}
