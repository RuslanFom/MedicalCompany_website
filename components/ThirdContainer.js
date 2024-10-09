import {
  Container,
  Grid,
  Box,
  Heading,
  Text,
  Button,
  Image,
  useColorModeValue, Flex
} from '@chakra-ui/react'
import NextLink from 'next/link'

export const ThirdContainer = () => (
  <Container
    maxW="container.2xl"
    py="70px"
    px={{ base: '40px', md: '60px', lg: '60px' }}
    bg={useColorModeValue(' #E2E4E4', 'gray.800')}
    borderRadius="xl"
    overflow="hidden"
  >
    <Grid
      templateColumns={{ base: '1fr', lg: '1fr auto' }}
      gap={{ base: 10, lg: 6 }}
      alignItems="center"
      justifyContent={{ base: 'center', lg: 'space-between' }}
    >
      <Box>
        <Heading
          fontFamily="'Montserrat', sans-serif"
          as="h2"
          size="lg"
          mb={4}
          fontWeight={300}
        >
          Medizin für Ihren Betrieb
        </Heading>
        <Text fontSize="15px" fontFamily="'Montserrat', sans-serif" mb={4}>
          Nur in einem gesundheitsförderlichen Umfeld ist wertschöpfende Arbeit
          dauerhaft möglich.
        </Text>
        <Text fontSize="15px" fontFamily="'Montserrat', sans-serif" mb={4}>
          Wir helfen Ihnen dabei, Rechtssicherheit zu schaffen und Gesundheit
          als Teil Ihrer Firmenkultur zu verankern.
        </Text>
        <Text fontSize="15px" fontFamily="'Montserrat', sans-serif" mb={4}>
          Ihr Betriebsarzt unterstützt Sie auch bei der Umsetzung der
          Gefährdungsbeurteilung psychischer Belastungen am Arbeitsplatz, der
          Einführung eines betrieblichen Eingliederungsmanagementes oder eines
          betrieblichen Gesundheitsmanagements.
        </Text>
        <Text fontSize="15px" fontFamily="'Montserrat', sans-serif" mb={4}>
          Arbeitsmedizin - mit Herz und Verstand - für ein gesundes und
          leistungsfähiges Unternehmen in München und Südbayern.
        </Text>
        <Flex justifyContent="center" mt={6}>
          <NextLink href="/">
            <Button
              bgGradient="linear(to-r, #3cd3ad, #6dd5fa)"
              size="lg"
              borderRadius="50px"
              fontFamily="'Montserrat', sans-serif"
            >
              Unsere Leistungen
            </Button>
          </NextLink>
        </Flex>
      </Box>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('#E2E4E4', '#E2E4E4')}
        width="400px"
        height="400px"
        flexShrink={0}
        mx={{ base: 'auto', lg: 0 }}
      >
        <Image
          src="/images/home_ueber_uns2-ac75d1ac.webp"
          alt="Stethoscope"
          width="400px"
          height="400px"
          objectFit="contain"
        />
      </Box>
    </Grid>
  </Container>
)
