import Chakra from '../components/Chakra';
import Layout from '../components/layouts/main'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion';

const Website = ({ Component, pageProps, router }) => {
  useEffect(() => {
    // Ensures scroll restoration is only set on the client-side
    window.history.scrollRestoration = 'manual';

    // Scroll to top on route change
    const handleRouteChange = () => {
      window.scrollTo({ top: 0 });
    };

    // Add event listener for route changes
    router.events.on('routeChangeComplete', handleRouteChange);

    // Cleanup listener on unmount
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return (
    <Chakra cookies={pageProps.cookies}>
      <Layout router={router}>
        <AnimatePresence
          mode="wait"
          initial={true}
          onExitComplete={() => window.scrollTo({ top: 0 })}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </Chakra>
  )
}

export default Website
