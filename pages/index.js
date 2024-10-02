import {
  Container,
  Box,
  Image,
  Text,
  Button,
  Heading,
  Grid,
  useColorModeValue
} from '@chakra-ui/react'
import Layout from '../components/layouts/Article'
import NextLink from 'next/link'
import ContactForm from './../components/contactForm'
import Footer from '../components/footer'

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
        <Container
          display="flex"
          maxW="full" // Контейнер занимает всю ширину
          w="full" // Ширина контейнера — 100%
          h={{ base: '400px', md: '550.5px' }} // Фиксируем высоту контейнера (можно изменить по необходимости)
          position="relative"
          px={0}
          my={5}
        >
          {/* Первая группа контейнеров */}
          <Box
            display="flex"
            borderRadius={{ base: 'none', sm: 'xl' }}
            w="full"
            h="full"
            m={0}
            p={{ base: '10px', md: '10px', lg: '40px' }}
            overflow="hidden"
            align="center"
            position="relative"
          >
            <Image
              src="/images/home_head.webp"
              alt="initial image"
              w="100vw" // Картинка будет занимать 100% ширины экрана
              h="100%" // Высота картинки будет фиксированной, равной высоте контейнера
              objectFit="cover" // Картинка будет растягиваться по ширине, сохраняя пропорции
              transform="scale(1.2)" // Добавляем эффект зумирования
              transition="transform 0.3s ease-in-out" // Плавный переход при изменении ширины экрана
            />
            <Container
              position="absolute"
              top="50%" // Располагаем по центру по вертикали
              left="0" // Располагаем слева
              transform="translateY(-50%)" // Центрирование по вертикали
              bg="rgba(0, 0, 0, 0.6)" // Полупрозрачный фон для читаемости текста
              color="white"
              variant={{
                base: 'base',
                sm: 'sm',
                md: 'md',
                lg: 'lg'
              }}
              borderRadius="md"
              maxH={{
                base: '90%',
                sm: '352px',
                md: '470.5px',
                lg: '470.5px',
                xl: '470.5px'
              }}
              maxW={{ base: 'auto', sm: 'auto', md: '450px' }} // Адаптивная ширина контейнера
              h="470.5px"
              w={{ base: 'auto', sm: 'auto' }} // Контейнер будет занимать 80% ширины на маленьких экранах
              overflow="hidden"
              whiteSpace="normal" // Чтобы текст не выходил за пределы контейнера
              wordWrap="break-word" // Чтобы длинные слова перенеслись
              display="flex" // Используем flexbox для выравнивания
              flexDirection="column" // Вертикальное выравнивание элементов
              justifyContent="center" // Центрирование по вертикали
            >
              <Text
                fontSize={{ base: '35px', sm: '40px', lg: '50px' }}
                lineHeight="1"
                py={4}
                fontFamily="'Montserrat', sans-serif"
              >
                Arbeitsmedizin & Prävention.
              </Text>
              <Text
                fontFamily="'Montserrat', sans-serif"
                px={5}
                textAlign="left"
                variant={{
                  base: 'base',
                  sm: 'sm',
                  md: 'md',
                  lg: 'lg'
                }}
              >
                CompanyMedics ist Ihr kompetenter und zuverlässiger
                Ansprechpartner für alle Fragen rund um die Gesundheit Ihres
                Unternehmens in München, Oberbayern und Schwaben. Unsere Praxis
                für Arbeitsmedizin & Prävention finden Sie in der Sonnenstraße 4
                direkt im Zentrum der Münchener Innenstadt. Wir freuen uns auf
                Ihren Besuch!
              </Text>
              <Box py={6} align="center">
                <NextLink href="/">
                  <Button
                    colorScheme="teal"
                    size={{ base: 'sm', md: 'md', lg: 'lg' }}
                    w={{ base: 'auto', sm: 'auto' }}
                    borderRadius="3xl"
                    fontSize="2px"
                  >
                    Zur Praxis
                  </Button>
                </NextLink>
              </Box>
            </Container>
          </Box>
        </Container>

        {/* Вторая группа контейнеров с отступом */}
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
                mb={2}
                width="81px"
                height="61px"
                objectFit="contain"
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
              <Image src="/images/as.svg" alt="betriebsmedizin" />
              <Heading as="h2" fontSize="2xl" mt="20px">
                Arbeitssicherheit
              </Heading>
              <Text fontFamily="'Montserrat', sans-serif" mt="20px">
                Gefährdungsbeurteilungen und Ableitungen von Maßnahmen
              </Text>
            </NextLink>
          </Container>
        </Container>

        <Container
          maxW="container.2xl"
          py="70px"
          px="320px"
          bg={useColorModeValue(' #ebebec', 'gray.800')}
          borderRadius="xl"
        >
          <Grid
            templateColumns={{
              base: '1fr',
              md: '1fr 1fr'
            }} // Одна колонка на маленьких экранах, две колонки на больших
            gap={6}
            alignItems="center"
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
              <Text
                fontSize="15px"
                fontFamily="'Montserrat', sans-serif"
                mb={4}
              >
                Nur in einem gesundheitsförderlichen Umfeld ist wertschöpfende
                Arbeit dauerhaft möglich.
              </Text>
              <Text
                fontSize="15px"
                fontFamily="'Montserrat', sans-serif"
                mb={4}
              >
                Wir helfen Ihnen dabei, Rechtssicherheit zu schaffen und
                Gesundheit als Teil Ihrer Firmenkultur zu verankern.
              </Text>
              <Text
                fontSize="15px"
                fontFamily="'Montserrat', sans-serif"
                mb={4}
              >
                Ihr Betriebsarzt unterstützt Sie auch bei der Umsetzung der
                Gefährdungsbeurteilung psychischer Belastungen am Arbeitsplatz,
                der Einführung eines betrieblichen Eingliederungsmanagementes
                oder eines betrieblichen Gesundheitsmanagements.
              </Text>
              <Text
                fontSize="15px"
                fontFamily="'Montserrat', sans-serif"
                mb={4}
              >
                Arbeitsmedizin - mit Herz und Verstand - für ein gesundes und
                leistungsfähiges Unternehmen in München und Südbayern.
              </Text>
              <NextLink href="/">
                <Button
                  colorScheme="teal"
                  size="lg"
                  borderRadius="50px"
                  fontFamily="'Montserrat', sans-serif"
                >
                  Unsere Leistungen
                </Button>
              </NextLink>
            </Box>
            <Box ml="50px">
              <Image
                src="/images/home_ueber_uns2-ac75d1ac.webp" // Убедитесь, что путь к изображению правильный
                alt="Stethoscope"
                objectFit="contain"
              />
            </Box>
          </Grid>
        </Container>

        <Box
          display="flex"
          flexDirection="column"
          alignItems="left"
          px="30px"
          my="70px"
          mx="40px"
          borderLeft="4px solid"
          borderColor="black.400"
        >
          <Text
            fontFamily="'Montserrat', sans-serif"
            fontStyle="italic"
            fontSize="xl"
            as="q"
          >
            Der Mensch, der zu beschäftigt ist, sich um seine Gesundheit zu
            kümmern, ist wie ein Handwerker, der keine Zeit hat, sein Werkzeug
            zu pflegen.
          </Text>
          <Text
            fontFamily="'Montserrat', sans-serif"
            fontStyle="italic"
            fontSize="sm"
            mt={2}
            color="gray.500"
          >
            — (unbekannter spanischer Autor)
          </Text>
        </Box>

        <Container
          maxW="container.2xl"
          w="full"
          m={0}
          p={0}
          display="flex"
          h={{
            base: '694.7px',
            sm: '526.1px',
            md: '436.1px',
            lg: '586.1px'
          }} // Фиксируем высоту контейнера (можно изменить по необходимости)
          position="relative"
        >
          <Box
            display="flex"
            borderTopRadius={{ base: 'none', sm: 'xl' }}
            borderBottomRadius="0"
            w="full"
            h="full"
            m={0}
            p={{ base: '10px', md: '20px', lg: '40px' }}
            overflow="hidden"
            align="center"
            position="relative"
          >
            <Image
              src="/images/home_beratung-3b1456c3.webp"
              alt="Doctor Writing"
              w="100%" // Картинка будет занимать 100% ширины экрана
              h="100%" // Высота картинки будет фиксированной, равной высоте контейнера
              objectFit="cover" // Картинка будет растягиваться по ширине, сохраняя пропорции
              transform="scale(1.2)" // Добавляем эффект зумирования
              transition="transform 0.3s ease-in-out" // Плавный переход при изменении ширины экрана
            />
            <Container
              position="absolute"
              mx={{ base: '10px', sm: '15px', md: '20px', lg: '40px' }}
              p={{ xl: '20px' }}
              top="50%" // Располагаем по центру по вертикали
              right="0" // Располагаем справа
              transform="translateY(-50%)" // Центрирование по вертикали
              bg="rgba(0, 0, 0, 0.6)" // Полупрозрачный фон для читаемости текста
              color="white"
              borderRadius="md"
              maxH={{
                base: '614.7px',
                sm: '446.1px',
                md: '356px',
                lg: '446px',
                xl: '446px'
              }}
              maxW={{ base: 'auto', sm: 'auto', md: 'auto', lg: '551.2px' }} // Адаптивная ширина контейнера
              h={{
                base: '614.7px',
                sm: '446.1px',
                md: '356px',
                lg: '446px',
                xl: '446px'
              }}
              w={{ base: 'auto', sm: 'auto' }} // Контейнер будет занимать 80% ширины на маленьких экранах
              overflow="hidden"
              whiteSpace="normal" // Чтобы текст не выходил за пределы контейнера
              wordWrap="break-word" // Чтобы длинные слова перенеслись
              display="flex" // Используем flexbox для выравнивания
              flexDirection="column" // Вертикальное выравнивание элементов
              justifyContent="center"
              alignItems="flex-start" // Центрирование по вертикали
            >
              <Heading
                fontSize={{ base: '24px', sm: '24px' }}
                lineHeight="1"
                py={4}
                fontFamily="'Montserrat', sans-serif"
                as="h3"
                mb="20px"
                fontWeight={300}
                textAlign="left"
              >
                Erhalten Sie eine persönliche Beratung
              </Heading>
              <Box>
                <Text
                  fontFamily="'Montserrat', sans-serif"
                  fontSize="15px"
                  textAlign="left"
                  mb={4}
                >
                  Für Unternehmer gibt es eine Reihe von
                  Arbeitsschutzvorschriften, die es zu beachten gilt. Besondere
                  Bedeutung haben dabei das Arbeitsschutzgesetz und das
                  Arbeitssicherheitsgesetz. Sie verpflichten zum aktiven
                  Gesundheitsschutz für die Beschäftigten und zur Bestellung von
                  Betriebsärzten und Fachkräften für Arbeitssicherheit
                  unabhängig von der Unternehmensgröße. Wir helfen Ihnen dabei,
                  die gesetzlichen Anforderungen nachvollziehbar und transparent
                  umzusetzen und erbringen arbeitsmedizinische
                  Vorsorgeuntersuchungen. Gerne beraten wir Sie darüber hinaus
                  bei der Implementierung eines betrieblichen
                  Gesundheitsmanagements.
                </Text>
                <Text
                  fontFamily="'Montserrat', sans-serif"
                  textAlign="left"
                  fontSize="15px"
                >
                  Gerne beraten wir Sie unverbindlich.
                </Text>
              </Box>
            </Container>
          </Box>
        </Container>

        <ContactForm />
        <Footer />

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
export { getServerSideProps } from '/components/Chakra';
