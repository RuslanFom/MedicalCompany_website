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

const LinkItem = ({ href, path, target, children, ...props }) => {
  const isActive = path === href
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={isActive ? 'grassTeal' : undefined}
      color={isActive ? '#202023' : inactiveColor}
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

const Navbar = ({ path }) => {
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
          <LinkItem href="/works" path={path}>
            Home
          </LinkItem>
          <LinkItem href="/skills" path={path}>
            Leistungen
          </LinkItem>
          <LinkItem href="/contacts" path={path}>
            Terminvereinbarung
          </LinkItem>
          <LinkItem href="/examples" path={path}>
            Praxis
          </LinkItem>
          <LinkItem href="/examples" path={path}>
            Unternehmen
          </LinkItem>
          <LinkItem href="/examples" path={path}>
            Kontakt
          </LinkItem>
        </Stack>

        <Box ml="auto" py={5} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'inline-block', lg: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={MenuLink} href="/">
                  Home
                </MenuItem>
                <MenuItem as={MenuLink} href="/works">
                  Leistungen
                </MenuItem>
                <MenuItem as={MenuLink} href="/examples">
                  Terminvereinbarung
                </MenuItem>
                <MenuItem as={MenuLink} href="/skills">
                  Praxis
                </MenuItem>
                <MenuItem as={MenuLink} href="/contacts">
                  Unternehmen
                </MenuItem>
                <MenuItem as={MenuLink} href="/contacts">
                  Kontakt
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
