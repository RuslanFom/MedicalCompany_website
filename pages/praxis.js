import Layout from '../components/layouts/Article'
import {Box, Button, Container, Image } from '@chakra-ui/react'
import NextLink from "next/link";

const Praxis = () => (
  <Layout title='praxis'>
    <Container>
      <Image src="/images/leistungen_am-98f373aa.webp" alt="leistungen" />
    </Container>
    <Box my={6} align="center">
      <NextLink href="/">
        <Button colorScheme="teal">Return to home</Button>
      </NextLink>
    </Box>
  </Layout>
)

export default Praxis