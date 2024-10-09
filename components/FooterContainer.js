import { Box, Container, Heading, Image, Text } from '@chakra-ui/react'

export const FooterContainer = () => (
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
)