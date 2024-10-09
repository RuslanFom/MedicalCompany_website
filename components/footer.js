import { Box, Text, Container, useColorModeValue } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Container
      m={0}
      p={10}
      w="full"
      h="full"
      maxW="full"
      bg={useColorModeValue(' #E2E4E4', 'gray.800')}
      borderBottomRadius="xl"
    >
      <Box align="center" opacity={0.4} fontSize="md">
        <Text color={useColorModeValue('black', 'white')}>
          &copy; {new Date().getFullYear()} CompanyMedics GmbH | Tel: 089–95 45
          86 920 | kontakt@companymedics.de
        </Text>
      </Box>
    </Container>
  )
}
