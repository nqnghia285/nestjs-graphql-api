import type { NextPage } from 'next'
import { ImageProps } from 'next/image'
import { useMemo, useRef } from 'react'
import { setBreadCrumbs } from '~/app/slices/breadcrumbs.slice'
import { useAppDispatch } from '~/app/store'
import { BreadcrumbsPath } from '~/components/Breadcrumbs'
import Card from '~/components/Card'
import { HeaderMethods } from '~/components/Header'
import MessageIcon from '~/components/Message/MessageIcon'
import PageContainer from '~/components/PageContainer'

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

   const breadcrumbsPath = {
      homePiece: {
         icon: 'fa-solid fa-house-chimney',
         path: '/',
      },
   } as BreadcrumbsPath

   const dispath = useAppDispatch()

   dispath(setBreadCrumbs(breadcrumbsPath))

   return (
      <PageContainer
         className=''
         head={
            <>
               <title>Atom</title>
               <meta name='description' content='Atom is a shop loptop' />
               <link rel='icon' href='/favicon.ico' />
            </>
         }
      >
         <MessageIcon ref={messageRef} />
         {/* <CarouselWithThumbsController
            slideChildren={slideChildren}
            className='fixed top-32 left-96 w-[300px] h-fit p-3 bg-white'
         />
         <CarouselWithAutoSwipe
            slideChildren={slideChildren}
            className='fixed top-96 left-96 w-[300px] h-fit p-3 bg-white'
         /> */}
         <Card
            title='Card name'
            description='sdffgb gghghghfghhh ghh'
            imageProps={{
               src: loginBGPath,
               alt: '',
               width: '120px',
               height: '60px',
            }}
            titleClassName='text-lg my-0 mb-0'
            descriptionClassName='text-sm my-0 mb-0'
            containerClassName='p-2 m-0'
         />
      </PageContainer>
   )
}

export default Home
