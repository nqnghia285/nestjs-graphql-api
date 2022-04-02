import { GetStaticProps } from 'next'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

export const getStaticProps: GetStaticProps = () => {
   return {
      props: {},
   }
}

export default function NotFound() {
   const containerRef = useRef<HTMLDivElement>(null)

   useEffect(() => {
      const container = containerRef.current

      function handleMouseMove(ev: MouseEvent) {
         const x = -ev.clientX / 5
         const y = -ev.clientY / 5

         if (container) {
            container.style.backgroundPositionX = `${x}px`
            container.style.backgroundPositionY = `${y}px`
         }
      }

      if (typeof window !== 'undefined' && container) {
         window.addEventListener('mousemove', handleMouseMove, true)
      }

      return () => {
         window.removeEventListener('mousemove', handleMouseMove)
      }
   }, [containerRef])

   return (
      <>
         <div className='flex justify-center items-center w-screen h-screen bg-gradient-to-tr from-violet-900 to-sky-400'>
            <div
               ref={containerRef}
               className='flex flex-col w-5/6 laptop:w-1/2 h-fit p-6 bg-slate-600 self-center justify-center items-center space-y-3 text-white rounded-xl bg-not-found'
            >
               <h1 className='text-7xl laptop:text-9xl'>404</h1>
               <h2 className='text-slate-700 text-xl laptop:text-2xl bg-slate-200 rounded-sm px-3 py-1'>
                  Opps! Page not found
               </h2>
               <p className='flex w-full laptop:1/2 self-center justify-center text-md laptop:text-lg'>
                  The page you were looking for doesn&apos;t exist. You may have
                  mistyped the address or the page may have moved.
               </p>
               <Link href={'/'} passHref>
                  <a className='flex text-white bg-slate-600 rounded-lg p-3 active:ring-1 active:ring-red-500 hover:bg-slate-400 hover:text-blue-600 active:text-red-500 space-x-1'>
                     <i className='fa-solid fa-house-chimney'></i>
                     <i className='fa-solid fa-reply self-center'></i>
                  </a>
               </Link>
            </div>
            <div></div>
         </div>
      </>
   )
}
