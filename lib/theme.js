import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
        body: {
            bg: mode('#fff', '#202023')(props)
        }
    })
}

const components = {
    Text: {
        variants: {
            base: {
                fontSize: "14px"
            },
            sm: {
                fontSize: "15px"
            },
            md: {
                fontSize: "15px"
            },
            lg: {
                fontSize: "15px"
            },
        }
    },
    Container: {
        variants: {
            base: {
                padding: "15px",
                marginX: "20px"
            },
            sm: {
                padding: "20px",
                marginX: "20px"
            },
            md: {
                padding: "20px",
                marginX: "40px"
            },
            lg: {
                padding: "40px",
                marginX: "40px",
            },
        }
    },
    Link: {
        baseStyle: props => ({
            color: mode('#3d7aed', '#ff63c3')(props),
            textUnderlineOffset: 3
        })
    },
}

const fonts = {
    heading: "'Montserrat', sans-serif"
}

const colors = {
    grassTeal: '#88ccca'
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme