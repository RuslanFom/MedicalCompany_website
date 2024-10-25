import Layout from '../components/layouts/Article'
import {Box, Button, Container, Image, Text } from '@chakra-ui/react'
import NextLink from "next/link";
import { useTranslation } from 'next-i18next';

const Terminvereinbarung = () => {
  const { t } = useTranslation('common')

  return (
  <Layout title='terminvereinbarung'>
    <Container
      display="flex"
      flexDirection="column"
      maxW="full" // Контейнер занимает всю ширину
      w="full"
      px={0}
      mt={5}
    >
      <Image 
      src="/images/praxis_head-daf80ec8.webp" 
      alt="leistungen" 
      h={{ base: "166.38px", md: "123.19px", lg: "248px", xl: "194px" }}
      objectFit="cover"
      />
    </Container>
    <Container py="70px" m={0} display="flex" justifyContent="center" alignItems="center"> 
      <Container m={0} p={0}> 
        <Text as="h2" fontSize="md" py="15px"
        px="25px">
          Willkommen auf unserer Online-Terminbuchungsseite. 
          In wenigen Schritten können Sie einen Termin bei uns online buchen. 
          Wir freuen uns auf Sie!
        </Text>
      </Container>
    </Container>
    <Box my={6} align="center">
      <NextLink href="/" passHref>
        <Button as="a" bgGradient="linear(to-r, #3cd3ad, #6dd5fa)">
          {t('terminvereinbarung.button')}
        </Button>
      </NextLink>
    </Box>
  </Layout>
)
}

export default Terminvereinbarung
export {getServerSideProps} from '../pages/index'