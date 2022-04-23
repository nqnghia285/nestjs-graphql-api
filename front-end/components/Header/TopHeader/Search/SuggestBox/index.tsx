import clsx from 'clsx'
import LeftSuggestBox, { BrandOrModel } from './LeftSuggestBox'
import RightSuggestBox, { MatchingItem } from './RightSuggestBox'

export interface SuggestBoxProps {
   className?: string
   searchText: string
}

function SuggestBox({ className, searchText }: SuggestBoxProps) {
   const brands: BrandOrModel[] = [
      { name: 'Lenovo', path: '/products/lenovo' },
      { name: 'Asus', path: '/products/asus' },
   ]

   const models: BrandOrModel[] = [
      { name: 'thinkpad', path: '/products/lenovo/model' },
      { name: 'zenbook', path: '/products/asus/model' },
   ]

   const items: MatchingItem[] = [
      {
         path: '/products/lenovo/model/product',
         itemProps: {
            currentPrice: '20.000.000',
            dealPrice: '22.000.000',
            title: 'lenovo yoga slim 7 pro 16" | AMD Ryzen 7 6800H | RTX 2050',
            image: {
               title: 'Image',
               mimeType: 'jpg',
               data: '/images/icon-laptop.webp',
            },
         },
      },
      {
         path: '/products/lenovo/model/product',
         itemProps: {
            currentPrice: '20.000.000',
            dealPrice: '22.000.000',
            title: 'lenovo yoga slim 7 pro',
            image: {
               title: 'Image',
               mimeType: 'jpg',
               data: '/images/icon-laptop.webp',
            },
         },
      },
      {
         path: '/products/lenovo/model/product',
         itemProps: {
            currentPrice: '20.000.000',
            dealPrice: '22.000.000',
            title: 'lenovo yoga slim 7 pro',
            image: {
               title: 'Image',
               mimeType: 'jpg',
               data: '/images/icon-laptop.webp',
            },
         },
      },
   ]

   return (
      <div
         className={clsx(
            'absolute top-[calc(100%+4px)] -left-10 tablet:left-0 z-50 flex flex-col justify-start items-start tablet:flex-row laptop:flex-row desktop:flex-row bg-slate-100 text-slate-800 max-w-[20rem] tablet:max-w-[32rem] max-h-[500px] tablet: rounded-md p-3 tablet:divide-x tablet:divide-solid tablet:divide-slate-500 shadow-xl',
            className
         )}
         style={{
            overflowY: 'auto',
         }}
      >
         <LeftSuggestBox brands={brands} models={models} />
         {/* Horizontal line */}
         <div className='w-full h-[2px] bg-slate-500 tablet:hidden'></div>
         <RightSuggestBox items={items} />
      </div>
   )
}

export default SuggestBox
