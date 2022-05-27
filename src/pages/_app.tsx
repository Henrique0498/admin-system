import ControlRender from 'components/ControlRender'
import { AppProps } from 'next/app'
import Head from 'next/head'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from '../styles/theme'
import 'styles/global.css'
import { GlobalProvider } from 'data/context/GlobalContext'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalProvider>
          <ControlRender>
            <Component {...pageProps} />
          </ControlRender>
          <GlobalStyles />
        </GlobalProvider>
      </ThemeProvider>
    </>
  )
}

export default App
