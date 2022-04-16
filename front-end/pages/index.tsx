import type { NextPage } from 'next'
import Head from 'next/head'
import { ImageProps } from 'next/image'
import { useMemo, useRef } from 'react'
import CarouselWithAutoSwipe from '~/components/CarouselWithAutoSwipe'
import CarouselWithThumbsController from '~/components/CarouselWithThumbsController'
import Header, { HeaderMethods } from '~/components/Header'
import MessageIcon from '~/components/Message/MessageIcon'

const Home: NextPage = () => {
   const messageRef = useRef<HTMLElement>(null)
   const headerMethodsRef = useRef<HeaderMethods>(null)
   const loginBGPath = useMemo(() => '/images/bg-login.jpg', [])
   const slideChildren = useMemo<ImageProps[]>(
      () => [
         {
            src: loginBGPath,
            alt: 'Slide',
            width: '400px',
            height: '200px',
         },
         {
            src: loginBGPath,
            alt: 'Slide',
            width: '400px',
            height: '200px',
         },
         {
            src: loginBGPath,
            alt: 'Slide',
            width: '400px',
            height: '200px',
         },
         {
            src: loginBGPath,
            alt: 'Slide',
            width: '400px',
            height: '200px',
         },
         {
            src: loginBGPath,
            alt: 'Slide',
            width: '400px',
            height: '200px',
         },
         {
            src: loginBGPath,
            alt: 'Slide',
            width: '400px',
            height: '200px',
         },
      ],
      [loginBGPath]
   )

   return (
      <div className='container flex flex-col justify-center items-center'>
         <Head>
            <title>Atom</title>
            <meta name='description' content='Atom is a shop loptop' />
            <link rel='icon' href='/favicon.ico' />
         </Head>

         <Header ref={headerMethodsRef} />
         <MessageIcon ref={messageRef} />
         {/* <CarouselWithThumbsController
            slideChildren={slideChildren}
            className='fixed top-32 left-96 w-[300px] h-fit p-3 bg-white'
         />
         <CarouselWithAutoSwipe
            slideChildren={slideChildren}
            className='fixed top-96 left-96 w-[300px] h-fit p-3 bg-white'
         /> */}
      </div>
   )
}

export default Home
