import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, PinInput, PinInputField, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'

const OTP = () => { 
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen}>modal</Button>
            <Modal isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />
                <ModalContent maxW={"300px"} m={"auto"}>
                    <ModalCloseButton />
                    <ModalBody >
                        <Text fontSize={"20px"} fontWeight={"600"}>Enter OTP</Text>
                        <Box mt={"20px"}>
                            <PinInput fontSize={"18px"} focusBorderColor='teal' errorBorderColor='red' >
                                <PinInputField ml={"15px"}/>
                                <PinInputField ml={"15px"}/>
                                <PinInputField ml={"15px"}/>
                                <PinInputField ml={"15px"}/>
                            </PinInput>
                        </Box>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='orange' m={"auto"} onClick={onClose}>
                            submit
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default OTP