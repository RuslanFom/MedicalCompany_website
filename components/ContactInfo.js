import { Box, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import Logo from './logo'

export const ContactInfo = () => {
  return (
    <Box
      display="flex"
      flex="1"
      bg={useColorModeValue(' #E2E4E4', 'gray.800')}
      borderRadius="md"
      p={5}
      ml={{ md: 10 }}
      mt={{ base: 10, md: 0 }}
      maxW={{ base: "100%", md: "489px", lg: "489px"}}
      alignItems="center"
      flexDirection="column"
    >
      <Box
        my={7}
      >
        <Logo />
      </Box>
      <Text fontSize="20px" mb={2} mt="40px">
        CompanyMedics GmbH
      </Text>
      <Text fontSize="20px">Sonnenstr. 4</Text>
      <Text fontSize="20px">80331 München</Text>

      <Text fontSize="20px" mt={5}>
        Tel: 089/ 9545 869 20
      </Text>
      <Text fontSize="20px">Fax: 089/ 9545 869 21</Text>

      <Text fontSize="20px" mt={5}>
        www.companymedics.de
      </Text>
      <Text fontSize="20px">kontakt@companymedics.de</Text>
    </Box>
  )
}
