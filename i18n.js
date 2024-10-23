import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import enTranslations from './public/locales/en/common.json'
import itTranslations from './public/locales/it/common.json'
import ruTranslations from './public/locales/ru/common.json'
import uaTranslations from './public/locales/ua/common.json'
import deTranslations from './public/locales/de/common.json'

i18n
.use(Backend)
.use(initReactI18next)
.init({
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
  },
  lng: 'de', // язык по умолчанию
  fallbackLng: 'de',
  interpolation: { escapeValue: false }
})

export default i18n
