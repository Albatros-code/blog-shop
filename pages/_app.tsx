import '../styles/variables.css'
import '../styles/globals.css'
import '../styles/utilityClasses.css'
import "@fontsource/montserrat"
import "@fontsource/lato"
import "@fontsource/merriweather"
import '../styles/fontawesome/css/all.css'

import type { AppProps } from 'next/app'
import { ThemeConfig, ThemeProvider } from '../src/utils/theme/Theme'
import Head from 'next/head'
import { ShopContextProvider } from '../src/pages/shop/utils/shopContext'


function MyApp({ Component, pageProps }: AppProps) {
  
  const theme: ThemeConfig = {
    col: {
      primary: 'lightblue',
      secondary: 'gray'
    },
    text: {
      fontfamily: 'Roboto'
    }
  }
  
  return (
    <>
      <Head>
        <title>Blog with shop</title>
        <meta name="description" content="Blog and shop" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.95em%22 font-size=%2280%22>🐱</text></svg>" />
      </Head>
      <ThemeProvider theme={theme}>
        <ShopContextProvider>
          <Component {...pageProps} />
        </ShopContextProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
