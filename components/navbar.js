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
  children,
  isOpen,
  onOpen,
  onClose
}) => {
  const isActive = path === href
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  const activeColor = useColorModeValue('gray.900', 'white')
  const isHome = href === '/'

  if (children) {
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
          {label}
        </MenuButton>
        <MenuList>
          {children.map((child, index) => (
            <MenuItem key={index} as={MenuLink} href={child.href}>
              {child.label}
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
      {label}
    </LinkItem>
  )
}

const Navbar = ({ path }) => {
  const [openMenu, setOpenMenu] = useState(null)
  const navItems = [
    { href: '/', label: 'Home' },
    {
      href: '/leistungen',
      label: 'Leistungen',
      children: [
        { href: '/leistungen', label: 'Überblick' },
        { href: '/leistungen/arbeitsmedizin', label: 'Arbeitsmedizin' },
        {
          href: '/leistungen/vorsorgeuntersuchungen',
          label: 'Vorsorgeuntersuchungen'
        },
        {
          href: '/leistungen/gesundheitsmanagement',
          label: 'Gesundheitsmanagement'
        },
        { href: '/leistungen/arbeitspsychologie', label: 'Arbeitspsychologie' },
        { href: '/leistungen/arbeitssicherheit', label: 'Arbeitssicherheit' }
      ]
    },
    {
      href: '/terminvereinbarung',
      label: 'Terminvereinbarung'
    },
    {
      href: '/praxis',
      label: 'Praxis'
    },
    {
      href: '/unternehmen',
      label: 'Unternehmen',
      children: [
        { href: '/unternehmen', label: 'Über uns' },
        { href: '/unternehmen/impressum', label: 'Impressum' },
        { href: '/unternehmen/datenschutz', label: 'Datenschutz' }
      ]
    },
    {
      href: '/kontakt',
      label: 'Kontakt'
    }
  ]
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      backdropFilter="blur(10px)"
      zIndex={2}
    >
      <Container
        display="flex"
        px="40px"
        maxW="container.2xl"
        align="center"
        justify="space-between"
      >
        <Flex align="center" flexShrink={0}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', lg: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          justifyContent="center"
          flexGrow={1}
          spacing={4}
          mt={{ base: 4, md: 0 }}
        >
          {navItems.map((item, index) => (
            <Box
              key={index}
              onMouseEnter={() => setOpenMenu(index)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <NavbarItem
                href={item.href}
                path={path}
                label={item.label}
                children={item.children}
                isOpen={openMenu === index}
                onOpen={() => setOpenMenu(index)}
                onClose={() => setOpenMenu(null)}
              />
            </Box>
          ))}
        </Stack>

        <Flex
          justify="flex-end"
          align="center"
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: 'auto', md: 0 }}
        >
          <LanguageSwitcher />
          <Box px={2} py={5} align="right">
            <ThemeToggleButton />
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
                      {item.label}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar
