import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  Textarea,
  VStack,
  FormErrorMessage,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react'



import HCaptcha from '@hcaptcha/react-hcaptcha'
import { useTranslation } from 'next-i18next'
import { useContactForm } from '../hooks/useContactForm'

const ContactForm = () => {
  const { t } = useTranslation('common')
  const {
    email,
    setEmail,
    captchaToken,
    captchaError,
    isSubmitting,
    loading,
    handleVerificationSuccess,
    handleVerificationError,
    handleSubmit,
    resetForm
  } = useContactForm()

  const textColor = useColorModeValue('black', 'white')
  const inputBgColor = useColorModeValue('white', 'gray.700')

  return (
    <Box
      flex="1"
      p={10}
      w={{ base: '100%', md: '45%', lg: '100%' }}
      maxH="652px"
      bg={useColorModeValue(' #E2E4E4', 'gray.800')}
      borderRadius="md"
      display="flex"
      flexDirection="column"
    >
      <Heading color={textColor} size="xl" mb={10}>
        {t('form.title')}
      </Heading>

      <VStack spacing={4} as="form" onSubmit={handleSubmit} flex="1">
        <FormControl isRequired>
          <Flex align="center">
            <Input
              name="name"
              placeholder={t('form.name')}
              bg={inputBgColor}
              color={textColor}
              flex="1"
              minW="250px"
            />
          </Flex>
        </FormControl>

        <FormControl isRequired>
          <Flex align="center">
            <Input
              name="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder={t('form.email')}
              bg={inputBgColor}
              color={textColor}
              flex="1"
              minW="250px"
            />
          </Flex>
        </FormControl>

        <FormControl>
          <Flex align="center">
            <Input
              name="company"
              placeholder={t('form.company')}
              bg={inputBgColor}
              color={textColor}
              flex="1"
              minW="250px"
            />
          </Flex>
        </FormControl>

        <FormControl isRequired>
          <Flex align="center">
            <Input
              name="phone"
              type="tel"
              placeholder={t('form.phone')}
              bg={inputBgColor}
              color={textColor}
              flex="1"
              minW="250px"
            />
          </Flex>
        </FormControl>

        <FormControl isRequired>
          <Flex align="center">
            <Textarea
              name="message"
              placeholder={t('form.message')}
              bg={inputBgColor}
              color={textColor}
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
            isLoading={isSubmitting || loading}
            borderRadius="3xl"
            bgGradient="linear(to-r, #3cd3ad, #6dd5fa)"
          >
            {t('form.submit')}
          </Button>
          <Button
            onClick={resetForm}
            borderRadius="3xl"
            bgGradient="linear(to-r, #3cd3ad, #6dd5fa)"
          >
            {t('form.reset')}
          </Button>
        </Flex>
      </VStack>
    </Box>
  )
}

export default ContactForm
