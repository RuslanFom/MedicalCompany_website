import { motion } from 'framer-motion'
import Head from 'next/head'
import PropTypes from 'prop-types' // Импорт для типизации пропсов


const variants = {
    hidden: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 }
}

const Layout = ({
                    children,
                    title,
                    transitionDuration = 0.4,
                    transitionType = 'easeInOut'
}) => {
    const pageTitle = title ? `${title} - Ruslan Fomin` : 'Ruslan Fomin';

    return (
        <motion.article
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: transitionDuration, type: transitionType }}
            style={{ position: 'relative' }}
        >
            <>
                {title && (
                    <Head>
                        <title>{pageTitle}</title>
                        <meta name="twitter:title" content={pageTitle} />
                        <meta property="og:title" content={pageTitle} />
                    </Head>
                )}
                {children}

            </>
        </motion.article>
    )
}

// Определение типов для пропсов
Layout.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    transitionDuration: PropTypes.number,
    transitionType: PropTypes.string
}

export default Layout
