import '@fortawesome/fontawesome-free/css/all.min.css'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import Button from '~/components/Button'

export const getStaticProps: GetStaticProps = () => {
   return {
      props: {},
   }
}

export default function NotFound() {
   const btnRef = useRef<HTMLButtonElement>(null)
   const router = useRouter()

   useEffect(() => {
      const btn = btnRef.current
      if (btn) {
         btn.onclick = () => {
            router.push('/')
         }
      }
   }, [btnRef, router])

   return (
      <>
         <div className='relative flex w-screen h-screen bg-gradient-to-tr from-violet-900 to-sky-400'>
            <div className='absolute top-[10%] left-[10%] right-[10%] bottom-[10%] rounded-xl flex justify-center items-center bg-not-found'>
               <h1>404</h1>
               <h2>Opps! Page not found</h2>
               <p>
                  The page you were looking for doesn&apos;t exist. You may have
                  mistyped the address or the page may have moved.
               </p>
               <Button ref={btnRef} color='info' size='xs' type='button'>
                  Go back home
               </Button>
            </div>
            <div></div>
         </div>
      </>
   )
}
