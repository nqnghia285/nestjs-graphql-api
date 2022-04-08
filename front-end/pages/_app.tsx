import { ApolloProvider } from '@apollo/client'
import '@fortawesome/fontawesome-free/css/all.min.css'
import type { AppProps } from 'next/app'
import { apolloClient } from '~/utilities'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <ApolloProvider client={apolloClient}>
         <Component {...pageProps} />
      </ApolloProvider>
   )
}

export default MyApp
