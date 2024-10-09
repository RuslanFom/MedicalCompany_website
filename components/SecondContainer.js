import { Container, Heading, Image, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

export const SecondContainer = () => (
  <Container
    display="grid"
    gridTemplateColumns={{
      base: '1fr',
      md: '1fr 1fr',
      lg: '1fr 1fr 1fr 1fr'
    }}
    gap={0} // Уменьшаем расстояние между контейнерами
    mx="auto"
    my="70px"
    p={0}
    maxW="100%"
    justifyContent="center"
  >
    <Container
      w="274px"
      h="212px"
      display="flex"
      flexDirection="column"
      align="center"
      justifyContent="center"
    >
      <NextLink href="/">
        <Image src="/images/am_01-610268fb.webp" alt="betriebsmedizin" />
        <Heading as="h2" fontSize="2xl" mt="20px">
          Betriebsmedizin
        </Heading>
        <Text fontFamily="'Montserrat', sans-serif" mt="20px">
          Sämtliche arbeitsmedizinische Leistungen nach ASIG und DGUV V2
        </Text>
      </NextLink>
    </Container>

    <Container
      w="274px"
      h="212px"
      display="flex"
      flexDirection="column"
      align="center"
      justifyContent="center"
    >
      <NextLink href="/">
        <Image src="/images/am_02.svg" alt="betriebsmedizin" />
        <Heading as="h2" fontSize="2xl" mt="20px">
          Arbeitsmedizinische Untersuchungen
        </Heading>
        <Text fontFamily="'Montserrat', sans-serif" mt="20px">
          In unserer Praxis oder vor Ort in Ihrem Betrieb
        </Text>
      </NextLink>
    </Container>

    <Container
      w="274px"
      h="212px"
      display="flex"
      flexDirection="column"
      align="center"
      justifyContent="center"
    >
      <NextLink href="/">
        <Image
          src="/images/berufl_gf.svg"
          alt="betriebsmedizin"
        />
        <Heading as="h2" fontSize="2xl" mt="20px">
          Gesundheits-management
        </Heading>
        <Text fontFamily="'Montserrat', sans-serif" mt="20px">
          Schritt für Schritt zur neuen Unternehmenskultur
        </Text>
      </NextLink>
    </Container>

    <Container
      align="center"
      w="274px"
      h="212px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <NextLink href="/">
        <Image src="/images/as.svg" alt="betriebsmedizin" pb="17px" />
        <Heading as="h2" fontSize="2xl" mb="45px" mt="10px">
          Arbeitssicherheit
        </Heading>
        <Text fontFamily="'Montserrat', sans-serif" mt="10px" mb="7px">
          Gefährdungsbeurteilungen und Ableitungen von Maßnahmen
        </Text>
      </NextLink>
    </Container>
  </Container>
)
