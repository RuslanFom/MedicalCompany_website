import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Company Medics website" />
        <meta name="author" content="Ruslan Fomin" />
        <link rel="shortcut icon" href="/cross.png" type="image/x-icon" />
        <title>Home - CompanyMedics GmbH</title>
      </Head>
      <Navbar path={router.asPath} />

      <Container px={{ base: '0px', sm: '16px' }} maxW="container.2xl" pt={20}>
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
