import Layout from '@/layouts/default'
import theme from '@/theme'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

MyApp.getInitialProps = async () => ({ pageProps: {} })

export default MyApp
