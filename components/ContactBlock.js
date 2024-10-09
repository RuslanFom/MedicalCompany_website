import {
  Flex,
  Container,
 useColorModeValue
} from '@chakra-ui/react'
import React from 'react'

import { ContactInfo } from './ContactInfo'
import ContactForm from './contactForm'

const ContactBlock = () => {
  return (
    <Container
      m={0}
      p={10}
      w="full"
      h="full"
      maxW="full"
      bg={useColorModeValue('white', 'gray.900')}
    >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between"
        color={useColorModeValue('black', 'white')}
      >
        <ContactForm />
        <ContactInfo />
      </Flex>
    </Container>
  )
}

export default ContactBlock