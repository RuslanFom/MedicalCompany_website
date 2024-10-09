import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const LanguageSwitcher = () => {
  const router = useRouter()
  const { locale, locales, push, pathname, query, asPath } = router

  const changeLanguage = newLocale => {
    push({ pathname, query }, asPath, { locale: newLocale }) // Переключаем язык через роутер
  }

  const languageLabels = {
    en: { short: 'ENG', full: 'English' },
    de: { short: 'DE', full: 'Deutsch' },
    it: { short: 'IT', full: 'Italiano' },
    ru: { short: 'RU', full: 'Русский' },
    ua: { short: 'UA', full: 'Українська' }
  }

  return (
    <Menu>
      <MenuButton as={Button}>{languageLabels[locale]?.short}</MenuButton>
      <MenuList>
        {locales.map(loc => (
          <MenuItem key={loc} onClick={() => changeLanguage(loc)}>
            {languageLabels[loc]?.full || loc}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default LanguageSwitcher
