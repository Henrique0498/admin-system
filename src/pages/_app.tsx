import { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'

import { AuthProvider } from 'context/GlobalAuth'
import { GlobalProvider } from 'context/GlobalContext'
import ControlRender from 'components/templates/ControlRender'
import theme from '../styles/theme'
import GlobalStyles from 'styles/global'

import 'styles/global.css'
import 'react-toastify/dist/ReactToastify.css'
import 'antd/dist/antd.css'

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
          <AuthProvider>
            <ControlRender>
              <Component {...pageProps} />
            </ControlRender>
          </AuthProvider>
          <GlobalStyles />
        </GlobalProvider>
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </ThemeProvider>
    </>
  )
}

export default App
