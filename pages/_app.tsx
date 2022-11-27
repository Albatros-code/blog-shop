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
      </Head>
      <ThemeProvider theme={theme}>
        {/* <ShopContextProvider> */}
          <Component {...pageProps} />
        {/* </ShopContextProvider> */}
      </ThemeProvider>
    </>
  )
}

export default MyApp
