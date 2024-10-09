import { Box, Text } from '@chakra-ui/react'

export const BoxSaying = () => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="left"
    px="30px"
    my="70px"
    mx="40px"
    borderLeft="4px solid"
    borderColor="black.400"
  >
    <Text
      fontFamily="'Montserrat', sans-serif"
      fontStyle="italic"
      fontSize="xl"
      as="q"
    >
      Der Mensch, der zu beschäftigt ist, sich um seine Gesundheit zu
      kümmern, ist wie ein Handwerker, der keine Zeit hat, sein Werkzeug
      zu pflegen.
    </Text>
    <Text
      fontFamily="'Montserrat', sans-serif"
      fontStyle="italic"
      fontSize="sm"
      mt={2}
      color="gray.500"
    >
      — (unbekannter spanischer Autor)
    </Text>
  </Box>
)