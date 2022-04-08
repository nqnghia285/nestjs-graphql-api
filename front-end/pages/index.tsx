import type { NextPage } from 'next'
import Head from 'next/head'
import { useRef } from 'react'
import Indicator from '~/components/Carousel/IndicatorGroup/Indicator'
import Header, { HeaderMethods } from '~/components/Header'
import MessageIcon from '~/components/Message/MessageIcon'

const Home: NextPage = () => {
   const messageRef = useRef<HTMLElement>(null)
   const headerMethodsRef = useRef<HeaderMethods>(null)

   return (
      <div className='container flex flex-col justify-center items-center'>
         <Head>
            <title>Atom</title>
            <meta name='description' content='Atom is a shop loptop' />
            <link rel='icon' href='/favicon.ico' />
         </Head>

         <Header ref={headerMethodsRef} />
         <MessageIcon ref={messageRef} />
         <Indicator />
      </div>
   )
}

export default Home
