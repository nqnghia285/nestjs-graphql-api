import clsx from 'clsx'
import Image from 'next/image'

export interface IImage {
   title: string
   mimeType: 'jpg' | 'jpeg' | 'png'
   data: string
}

export interface ItemProps {
   className?: string
   image: IImage
   title: string
   currentPrice: string
   dealPrice?: string
}

function Item({ className, image, currentPrice, dealPrice, title }: ItemProps) {
   return (
      <div
         className={clsx(
            'flex flex-row w-full justify-center items-center space-x-2 hover:text-blue-500',
            className
         )}
      >
         <div className='w-[60px] h-[60px] flex-shrink-0'>
            <Image
               // src={`data:image/${image.mimeType};base64,${image.data}`}
               src={image.data}
               alt={image.title}
               width='60px'
               height='60px'
            />
         </div>

         <div className='flex flex-col flex-shrink'>
            <h3>{title}</h3>
            <div className='flex flex-row space-x-2'>
               <span className='text-red-600'>{currentPrice}</span>
               <del className='text-slate-500'>{dealPrice}</del>
            </div>
         </div>
      </div>
   )
}

export default Item
