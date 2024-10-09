import { useState } from 'react'
import { useEmailSender } from './useEmailSender'
import { useToast } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'

export const useContactForm = () => {
  const { t } = useTranslation('common')
  const toast = useToast()
  const { sendEmail, loading } = useEmailSender()

  const [email, setEmail] = useState('')
  const [captchaToken, setCaptchaToken] = useState('')
  const [captchaError, setCaptchaError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleVerificationSuccess = (token) => {
    setCaptchaToken(token)
    setCaptchaError('')
  }

  const handleVerificationError = () => {
    setCaptchaError(t('form.captchaError'))
    setCaptchaToken('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (!captchaToken) {
      setCaptchaError(t('form.captchaError'))
      setIsSubmitting(false)
      return
    }

    const formData = {
      name: e.target.elements.name.value,
      email: email,
      company: e.target.elements.company.value,
      phone: e.target.elements.phone.value,
      message: e.target.elements.message.value,
      'g-recaptcha-response': captchaToken
    }

    try {
      await sendEmail(formData, t)
      toast({
        title: t('form.success'),
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      e.target.reset()
      setEmail('')
      setCaptchaToken('')
    } catch (error) {
      console.error(t('form.sendError'), error)
      toast({
        title: t('form.error'),
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setEmail('')
    setCaptchaToken('')
    setCaptchaError('')
  }

  return {
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
  }
}