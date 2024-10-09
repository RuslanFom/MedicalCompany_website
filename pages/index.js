import {
  Container,
} from '@chakra-ui/react'
import Layout from '../components/layouts/Article'

import { MainContainer } from '../components/MainContainer'
import { SecondContainer } from '../components/SecondContainer'
import { ThirdContainer } from '../components/ThirdContainer'
import { BoxSaying } from '../components/BoxSaying'
import { FooterContainer } from '../components/FooterContainer'
import ContactBlock from '../components/ContactBlock'

import { serverSideTranslations } from "next-i18next/serverSideTranslations"

export const getServerSideProps = async ({ req, locale }) => {
  const translations = await serverSideTranslations(locale, ['common'])
  return {
    props: {
      cookies: req.headers.cookie ?? '',
      ...translations,
    }
  }
}

const Home = () => {
  return (
    <Layout>
      <Container
        display="flex"
        flexDirection="column"
        maxW="full" // Контейнер занимает всю ширину
        w="full"
        p={0}
        m={0}
      >
        <MainContainer />
        <SecondContainer />
        <ThirdContainer />
        <BoxSaying />
        <FooterContainer />
        <ContactBlock />

        {/*<Container
        maxW="container.lg"
        borderRadius="md"
        bg="gray.200"
        p="20px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="center"
        m={0}
      >
        <Box
          bg="gray.400" // Ребёнок
          borderRadius="md"
          justifyContent="flex-start"
          alignItems="flex-start"
          display="flex"
          w="100%"
          h="100%"
          p="40px"
          m={0}
        >
          <Container
            bg="gray.600" // Ребёнок ребёнка
            w="100%"
            h="98%"
            m={1}
            p={0}

            borderRadius="md"



          >
            ребенок ебенка
          </Container>
        </Box>
      </Container>*/}
      </Container>
    </Layout>
  )
}

export default Home

