import { Container, Heading, Image, Text, Box, Flex } from '@chakra-ui/react'
import NextLink from 'next/link'

export const SecondContainer = () => (
  <Container
    display="grid"
    gridTemplateColumns={{
      base: '1fr',
      md: '1fr 1fr',
      lg: 'repeat(4, minmax(0, 1fr))'
    }}
    gap={{ base: 6, md: 4, lg: 2 }}
    mx="auto"
    my="70px"
    p={0}
    maxW={{ base: "95%", md: "100%" }}
    justifyContent="center"
  >
    {[
      {
        image: "/images/am_01-610268fb.webp",
        title: "Betriebsmedizin",
        text: "Sämtliche arbeitsmedizinische Leistungen nach ASIG und DGUV V2"
      },
      {
        image: "/images/am_02.svg",
        title: "Arbeitsmedizinische Untersuchungen",
        text: "In unserer Praxis oder vor Ort in Ihrem Betrieb"
      },
      {
        image: "/images/berufl_gf.svg",
        title: "Gesundheits-management",
        text: "Schritt für Schritt zur neuen Unternehmenskultur"
      },
      {
        image: "/images/as.svg",
        title: "Arbeitssicherheit",
        text: "Gefährdungsbeurteilungen und Ableitungen von Maßnahmen"
      }
    ].map((item, index) => (
        <Flex
        key={index}
        w="100%"
        maxW="274px"
        h={{ base: "auto", lg: "212px" }}
        flexDirection="column"
        align="center"
        justifyContent="center"
        mx="auto"
      >
        <NextLink href="/" passHref>
          <Box as="a" textAlign="center" w="100%">
            <Flex justify="center" mb="20px">
              <Image src={item.image} alt={item.title} />
            </Flex>
            <Heading as="h2" fontSize="2xl" mb="20px">
              {item.title}
            </Heading>
            <Text fontFamily="'Montserrat', sans-serif">
              {item.text}
            </Text>
          </Box>
        </NextLink>
      </Flex>
    ))}
  </Container>
)
