import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react';

import '../styles/globals.css'
import { darkTheme } from '../themes';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    // theme={ darkTheme }
    <NextUIProvider theme={ darkTheme }>
        <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp
