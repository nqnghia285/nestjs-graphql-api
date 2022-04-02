import '@fortawesome/fontawesome-free/css/all.min.css'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
   return <Component {...pageProps} />
}

export default MyApp
