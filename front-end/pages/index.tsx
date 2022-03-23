import '@fortawesome/fontawesome-free/css/all.min.css'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRef } from 'react'
import Header, { HeaderMethods } from '~/components/Header'

const Home: NextPage = () => {
   const headerMethodsRef = useRef<HeaderMethods | null>(null)

   return (
      <div className='container flex justify-center'>
         <Head>
            <title>Atom</title>
            <meta name='description' content='Atom is a shop loptop' />
            <link rel='icon' href='/favicon.ico' />
         </Head>

         <Header ref={headerMethodsRef} />
      </div>
   )
}

export default Home
