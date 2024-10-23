import { Box, Button, Container, Image, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

export const MainContainer = () => {
  return (
    <Container
      display="flex"
      maxW="full" // Контейнер занимает всю ширину
      w="full" // Ширина контейнера — 100%
      h={{ base: '400px', md: '550.5px' }} // Фиксируем высоту контейнера (можно изменить по необходимости)
      position="relative"
      px={0}
      mt={5}
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
            CompanyMedics ist Ihr kompetenter und zuverlässiger Ansprechpartner
            für alle Fragen rund um die Gesundheit Ihres Unternehmens in
            München, Oberbayern und Schwaben. Unsere Praxis für Arbeitsmedizin &
            Prävention finden Sie in der Sonnenstraße 4 direkt im Zentrum der
            Münchener Innenstadt. Wir freuen uns auf Ihren Besuch!
          </Text>
          <Box py={6} align="center">
            <NextLink href="/">
              <Button
                size={{ base: 'sm', md: 'md', lg: 'lg' }}
                w={{ base: 'auto', sm: 'auto' }}
                borderRadius="3xl"
                fontSize="2px"
                bgGradient="linear(to-r, #3cd3ad, #6dd5fa)"
              >
                Zur Praxis
              </Button>
            </NextLink>
          </Box>
        </Container>
      </Box>
    </Container>
  )
}
