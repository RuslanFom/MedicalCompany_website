import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Text,
  Image,
  Container,
  FormErrorMessage
} from '@chakra-ui/react'
import React, { useState } from 'react'

import HCaptcha from '@hcaptcha/react-hcaptcha'

const ContactForm = () => {
  const [email, setEmail] = useState('')
  const [captchaToken, setCaptchaToken] = useState('')
  const [captchaError, setCaptchaError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleVerificationSuccess = token => {
    setCaptchaToken(token)
    setCaptchaError('') // Сброс ошибки
  }

  // eslint-disable-next-line no-unused-vars
  const handleVerificationError = error => {
    setCaptchaError('Ошибка капчи. Попробуйте ещё раз.')
    setCaptchaToken('') // Сброс токена
  }

  const handleSubmit = async e => {
    e.preventDefault()

    setIsSubmitting(true)

    // Логика для отправки данных формы и проверки токена капчи
    const res = await fetch('/api/verify-captcha', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ token: captchaToken })
    })

    const data = await res.json()

    if (data.success) {
      alert('Форма успешно отправлена!')
      // Дополнительная логика обработки успешной верификации
    } else {
      alert('Ошибка проверки капчи!')
      setCaptchaError('Неверная капча. Пожалуйста, попробуйте ещё раз.')
    }

    setIsSubmitting(false)
  }

  return (
    <Container m={0} p={10} w="full" h="full" maxW="full" bg="gray.300">
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between"
        p={10}
        color="white"
      >
        {/* Левая часть - форма */}
        <Box flex="1" p={5} maxW="900px" maxH="652px" bg="gray.800">
          <Text fontSize="2xl" mb={5}>
            Kontakto
          </Text>

          <VStack spacing={4} as="form" onSubmit={handleSubmit}>
            <FormControl isRequired>
              <Flex align="center">
                <FormLabel minW="150px">Ihr Name</FormLabel>
                <Input
                  placeholder="Ihr Name"
                  bg="white"
                  color="black"
                  flex="1"
                  minW="250px"
                />
              </Flex>
            </FormControl>

            <FormControl isRequired>
              <Flex align="center">
                <FormLabel minW="150px">Ihre Email-Adresse</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Ihre Email-Adresse"
                  bg="white"
                  color="black"
                  flex="1"
                  minW="250px"
                />
              </Flex>
            </FormControl>

            <FormControl>
              <Flex align="center">
                <FormLabel minW="150px">Firma</FormLabel>
                <Input
                  placeholder="Firma"
                  bg="white"
                  color="black"
                  flex="1"
                  minW="250px"
                />
              </Flex>
            </FormControl>

            <FormControl isRequired>
              <Flex align="center">
                <FormLabel minW="150px">Telefonnummer</FormLabel>
                <Input
                  type="tel"
                  placeholder="Telefonnummer"
                  bg="white"
                  color="black"
                  flex="1"
                  minW="250px"
                />
              </Flex>
            </FormControl>

            <FormControl isRequired>
              <Flex align="center">
                <FormLabel minW="150px">Ihre Nachricht</FormLabel>
                <Textarea
                  placeholder="Ihre Nachricht"
                  bg="white"
                  color="black"
                  flex="1"
                  minW="250px"
                />
              </Flex>
            </FormControl>

            {/* Компонент hCaptcha */}
            <Box>
              <FormControl isRequired isInvalid={!!captchaError} mb={4}>
                <Flex>
                  <HCaptcha
                    sitekey="75e27526-7918-486c-bca6-e64809a6452a"
                    onVerify={handleVerificationSuccess}
                    onError={handleVerificationError}
                  />
                  <FormErrorMessage>{captchaError}</FormErrorMessage>
                </Flex>
              </FormControl>
            </Box>

            <Flex justifyContent="space-around" w="100%" m={5}>
              <Button
                type="submit"
                isDisabled={!email || !captchaToken}
                isLoading={isSubmitting}
                borderRadius="3xl"
                colorScheme="gray"
              >
                Absenden
              </Button>
              <Button borderRadius="3xl" colorScheme="teal">
                Zurücksetzen
              </Button>
            </Flex>
          </VStack>
        </Box>

        {/* Правая часть - контакты */}
        <Box
          display="flex"
          flex="1"
          bg="gray.800"
          p={5}
          ml={{ md: 10 }}
          mt={{ base: 10, md: 0 }}
          maxW="489px"
          alignItems="center"
          flexDirection="column"
        >
          <Image
            src="/images/companymedics_logo_negativ.svg"
            alt="company medics logo"
            w="220px"
            h="80px"
            mt={7}
            mb={5}
          />
          <Text fontSize="20px" mb={2} mt="40px">
            CompanyMedics GmbH
          </Text>
          <Text fontSize="20px">Sonnenstr. 4</Text>
          <Text fontSize="20px">80331 München</Text>

          <Text fontSize="20px" mt={5}>
            Tel: 089/ 9545 869 20
          </Text>
          <Text fontSize="20px">Fax: 089/ 9545 869 21</Text>

          <Text fontSize="20px" mt={5}>
            www.companymedics.de
          </Text>
          <Text fontSize="20px">kontakt@companymedics.de</Text>
        </Box>
      </Flex>
    </Container>
  )
}

export default ContactForm
