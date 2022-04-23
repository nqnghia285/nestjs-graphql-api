import clsx from 'clsx'
import Head from 'next/head'
import { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'

export interface PageContainerProps {
   className?: string
   head?: ReactNode
   children?: ReactNode
}

function PageContainer({ className, head, children }: PageContainerProps) {
   return (
      <div
         style={{
            overflowY: 'scroll',
            overflowX: 'hidden',
         }}
         className='max-w-full h-fit flex flex-col justify-center items-center'
      >
         {/* Head */}
         <Head>{head}</Head>

         {/* Header */}
         <Header />

         {/* Content */}
         <div className={clsx('w-full h-fit', className)}>{children}</div>

         {/* Footer */}
         <Footer />
      </div>
   )
}

export default PageContainer
