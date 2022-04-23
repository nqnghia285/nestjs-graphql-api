/* eslint-disable jsx-a11y/alt-text */
import clsx from 'clsx'
import Image, { ImageProps } from 'next/image'

export interface CardProps {
   className?: string
   imageProps: ImageProps
   title: string
   description: string
   titleClassName?: string
   descriptionClassName?: string
   containerClassName?: string
}

function Card({
   className,
   imageProps,
   description,
   title,
   descriptionClassName,
   titleClassName,
   containerClassName,
}: CardProps) {
   return (
      <div
         className={clsx(
            'rounded-lg shadow-lg bg-white w-fit overflow-hidden',
            className
         )}
      >
         <div className={clsx('p-6', containerClassName)}>
            <div className='hover:scale-105 ease-linear duration-200'>
               <Image {...imageProps} />
            </div>

            <h5
               className={clsx(
                  'text-gray-900 text-xl font-medium mb-2',
                  titleClassName
               )}
            >
               {title}
            </h5>
            <p
               className={clsx(
                  'text-gray-700 text-base mb-4',
                  descriptionClassName
               )}
            >
               {description}
            </p>
         </div>
      </div>
   )
}

export default Card
