import { useState } from 'react';
import emailjs from '@emailjs/browser';


export const useEmailSender = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', content: '' });

  const sendEmail = async (form, t) => {
    setLoading(true);
    setMessage({ type: '', content: '' });

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: process.env.NEXT_PUBLIC_EMAIL_TO_NAME,
          from_email: form.email,
          to_email: process.env.NEXT_PUBLIC_EMAIL_TO_EMAIL,
          message: form.message,
          phone: form.phone,
          company: form.company
        },
        process.env.NEXT_PUBLIC_EMAIL_USER_ID
      );
      setMessage({ type: 'success', content: t('form.success') });
      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      setMessage({ type: 'error', content: t('form.error') });
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { sendEmail, loading, message };
};