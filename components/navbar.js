import Logo from './logo'
import NextLink from 'next/link'
import { forwardRef } from 'react'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './Theme-toggle-button'
import { useState } from 'react'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslation } from 'next-i18next'

const LinkItem = ({ href, path, target, children, bg, ...props }) => {
  const isActive = path === href
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  const activeColor = useColorModeValue('gray.900', 'white')
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={bg}
      color={isActive ? activeColor : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  )
}
// eslint-disable-next-line react/display-name
const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
))

const NavbarItem = ({
  href,
  path,
  label,
  subItems,
  isOpen,
  onOpen,
  onClose
}) => {
  const { t } = useTranslation('common')
  const isActive = path === href
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  const activeColor = useColorModeValue('gray.900', 'white')
  const isHome = href === '/'

  if (subItems) {
    return (
      <Menu isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
        <MenuButton
          as={NextLink}
          href={href}
          p={2}
          bg={isActive && !isHome ? 'grassTeal' : undefined}
          color={isActive ? activeColor : inactiveColor}
          _hover={{ textDecoration: 'none' }}
        >
          {t(label)}
        </MenuButton>
        <MenuList>
          {subItems.map((child, index) => (
            <MenuItem key={index} as={MenuLink} href={child.href}>
              {t(child.label)}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    )
  }

  return (
    <LinkItem
      href={href}
      path={path}
      bg={isActive && !isHome ? 'grassTeal' : undefined}
    >
      {t(label)}
    </LinkItem>
  )
}

const Navbar = ({ path }) => {
  const { t } = useTranslation('common')
  const [openMenu, setOpenMenu] = useState(null)
  const navItems = [
    { href: '/', label: 'nav.home' },
    {
      href: '/leistungen',
      label:  'nav.services',
      children: [
        { href: '/leistungen', label: 'ser.over' },
        { href: '/leistungen/arbeitsmedizin', label: 'ser.occup' },
        {
          href: '/leistungen/vorsorgeuntersuchungen',
          label: 'ser.prev.exam'
        },
        {
          href: '/leistungen/gesundheitsmanagement',
          label: 'ser.health'
        },
        { href: '/leistungen/arbeitspsychologie', label: 'ser.occup.psy' },
        { href: '/leistungen/arbeitssicherheit', label: 'ser.occup.safe' }
      ]
    },
    {
      href: '/terminvereinbarung',
      label: 'nav.appointment'
    },
    {
      href: '/praxis',
      label: 'nav.practice'
    },
    {
      href: '/unternehmen',
      label: 'nav.company',
      children: [
        { href: '/unternehmen', label: 'com.about' },
        { href: '/unternehmen/impressum', label: 'com.imprint' },
        { href: '/unternehmen/datenschutz', label: 'com.policy' }
      ]
    },
    {
      href: '/kontakt',
      label: 'nav.contact'
    }
  ]
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      h="100px"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      backdropFilter="blur(10px)"
      zIndex={2}
      display="flex"
      alignItems="center"
    >
      <Container
        display="flex"
        px="40px"
        maxW="container.2xl"
        h="100%"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex align="center" h="100%">
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Flex justify="center" flex={1}>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            display={{ base: 'none', lg: 'flex' }}
            alignItems="center"
            justifyContent="center"
            spacing={4}
            h="100%"
          >
            {navItems.map((item, index) => (
              <Box
                key={index}
                onMouseEnter={() => setOpenMenu(index)}
                onMouseLeave={() => setOpenMenu(null)}
                h="100%"
                display="flex"
                alignItems="center"
              >
                <NavbarItem
                  href={item.href}
                  path={path}
                  label={item.label}
                  subItems={item.children}
                  isOpen={openMenu === index}
                  onOpen={() => setOpenMenu(index)}
                  onClose={() => setOpenMenu(null)}
                />
              </Box>
            ))}
          </Stack>
        </Flex>

        <Flex align="center" h="100%">
          <LanguageSwitcher />
          <Box ml={2}>
            <ThemeToggleButton />
          </Box>
          <Box
            ml={2}
            display={{ base: 'inline-block', md: 'inline-block', lg: 'none' }}
          >
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                {navItems.map((item, index) => (
                  <MenuItem key={index} as={MenuLink} href={item.href}>
                    {t(item.label)}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar
export {getServerSideProps} from '../pages/index'