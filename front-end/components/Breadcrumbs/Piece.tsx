import clsx from 'clsx'
import Link from 'next/link'
import { ReactChildren } from 'react'

export interface PieceProps {
   path: string
   children: string | ReactChildren
   className?: string
}

function Piece({ path, children, className }: PieceProps) {
   return (
      <Link href={path} passHref>
         <a className={clsx('text-gray-600 hover:underline', className)}>
            {children}
         </a>
      </Link>
   )
}

export default Piece
