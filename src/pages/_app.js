import "@fontsource/press-start-2p";

import {useEffect} from 'react';
import {useRouter} from 'next/router';
import * as Fathom from 'fathom-client';
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/theme";

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    Fathom.load('TBSAIDMS', {
      includedDomains: ['twan.dev'],
    })

    function onRouteChangeComplete() {
      Fathom.trackPageview()
    }

    router.events.on('routeChangeComplete', onRouteChangeComplete)

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
