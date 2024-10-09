import Layout from '../components/layouts/Article'
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Divider,
  Flex,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { TimeIcon } from '@chakra-ui/icons'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFax } from 'react-icons/fa'
import ContactForm from '../components/contactForm'
import { useTranslation } from 'next-i18next'

const WorkingHours = ({ day, hours }) => (
  <HStack justifyContent="space-between" width="100%">
    <Text fontWeight="bold">{day}</Text>
    <Text>{hours}</Text>
  </HStack>
)

const Kontakt = () => {
  const { t } = useTranslation('common')
  return (
    <Layout title="kontakt">
      <Box borderRadius="lg" bg={useColorModeValue('gray.50', 'gray.800')} minH="100vh">
        <Container maxW="container.xl" pt={20} pb={4}>
          <Heading size="xl" mb={10} textAlign="center">
            {t('nav.contact')}
          </Heading>

          <Flex direction={{ base: 'column', md: 'row' }} mb={10}>
            {/* Левая часть - место для контактной формы */}
            <Box flex={1} mr={{ base: 0, md: 8 }} mb={{ base: 8, md: 0 }}>
              {/* Здесь будет ваша контактная форма */}
              <Box w={{ base: '100%', md: '100%' }} p={4}>
                <Box flex={1} mr={{ base: 0, md: 8 }} mb={{ base: 8, md: 0 }}>
                  <ContactForm />
                </Box>
              </Box>
            </Box>

            {/* Правая часть - часы работы и адрес */}
            <VStack
              spacing={8}
              align="start"
              width={{ base: '100%', md: '300px' }}
            >
              <Box width="100%">
                <Heading fontSize="25px" mt={5} mb={5}>
                  CompanyMedics GmbH
                </Heading>
                <Divider />
                <Heading fontSize="20px" mt={5} mb={4}>
                  <TimeIcon mr={2} />
                  {t('contact.time')}
                </Heading>
                <WorkingHours day={t('contact.mon')} hours="9:00 - 18:00" />
                <WorkingHours day={t('contact.sam')} hours="10:00 - 14:00" />
                <WorkingHours day={t('contact.son')} hours={t('contact.close')} />
              </Box>

              <Divider />
              <Heading fontSize="20px">{t('contact.add')}</Heading>
              <VStack align="start" spacing={3}>
                <HStack>
                  <Icon as={FaMapMarkerAlt} boxSize={6} />
                  <Text>Sonnenstraße 4, 80331 München, Germany</Text>
                </HStack>
                <HStack>
                  <Icon as={FaPhone} boxSize={6} />
                  <Text>089/ 9545 869 20</Text>
                </HStack>
                <HStack>
                  <Icon as={FaFax} boxSize={6} />
                  <Text>089/ 9545 869 21</Text>
                </HStack>
                <HStack>
                  <Icon as={FaEnvelope} boxSize={6} />
                  <Text>kontakt@companymedics.de</Text>
                </HStack>
              </VStack>

            </VStack>
          </Flex>

          <Box width="100%" height="400px" mb={10}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10650.248373278971!2d11.545450687408442!3d48.13796774560808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479dd8ad115af09f%3A0x9f58538a782cf1fd!2sCompanyMedics%20GmbH!5e0!3m2!1sru!2sde!4v1728391825628!5m2!1sru!2sde"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
            />
          </Box>

          <Box my="50px" align="center">
            <NextLink href="/">
              <Button borderRadius="3xl" bgGradient="linear(to-r, #3cd3ad, #6dd5fa)">
                {t('contact.button')}
              </Button>
            </NextLink>
          </Box>
        </Container>
      </Box>
    </Layout>
  )
}

export default Kontakt
export {getServerSideProps} from '../pages/index'
