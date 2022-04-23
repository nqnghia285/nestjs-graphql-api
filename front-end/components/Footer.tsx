import clsx from 'clsx'
import { memo } from 'react'

export interface FooterProps {
   className?: string
}

function Footer({ className }: FooterProps) {
   return (
      <div
         className={clsx(
            'w-full h-fit flex flex-col tablet:flex-row text-white bg-gray-700',
            className
         )}
      >
         <div className='flex flex-col tablet:basis-1/2 justify-start items-start px-8 py-4'>
            <h3>Contact</h3>
            <div className='flex flex-row justify-start items-center space-x-2'>
               <i className='fa fa-envelope'></i>
               <span>{process.env.authorEmail}</span>
            </div>
            <div className='flex flex-row justify-start items-center space-x-2'>
               <i className='fa fa-phone'></i>
               <span>{process.env.authorPhone}</span>
            </div>
            <div className='flex flex-row justify-start items-center space-x-2'>
               <i className='fa-brands fa-github-square'></i>
               <a
                  href={process.env.authorGithub}
                  className='hover:text-sky-400 hover:underline'
               >
                  {process.env.author}
               </a>
            </div>
         </div>
         <div className='flex flex-col tablet:basis-1/2'></div>
      </div>
   )
}

const MemoOfFooter = memo(Footer)

export default MemoOfFooter
