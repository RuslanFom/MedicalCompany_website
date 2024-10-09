import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslations from './public/locales/en/common.json'
import itTranslations from './public/locales/it/common.json'
import ruTranslations from './public/locales/ru/common.json'
import uaTranslations from './public/locales/ua/common.json'
import deTranslations from './public/locales/de/common.json'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    de: { translation: deTranslations },
    it: { translation: itTranslations },
    ru: { translation: ruTranslations },
    ua: { translation: uaTranslations },
  },
  lng: 'de', // язык по умолчанию
  fallbackLng: 'de',
  interpolation: { escapeValue: false }
})

export default i18n
