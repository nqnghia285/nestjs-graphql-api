import clsx from 'clsx'
import Link from 'next/link'

export interface HomeProps {
   path: string
   icon: string
   className?: string
}

function Home({ path, icon, className }: HomeProps) {
   return (
      <Link href={path} passHref>
         <a className={clsx('text-gray-600', className)}>
            <i className={icon}></i>
         </a>
      </Link>
   )
}

export default Home
